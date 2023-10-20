const moment = require("moment");

const { redisClient } = require("../server");
const redis = require("redis");

const WINDOW_SIZE_IN_HOURS = 1;
const MAX_WINDOW_REQUEST_COUNT = 3;
const WINDOW_LOG_INTERVAL_IN_HOURS = 1;

const customRedisRateLimiter = async (req, res, next) => {
  const redisClient = redis.createClient({
    url: process.env.REDIS_URL,
  });

  redisClient.on("error", (err) => console.log("Redis Client Error", err));

  await redisClient.connect();

  try {
    // get the ip
    const ip = req.headers.ip;

    // check that redis client exists
    if (!redisClient) {
      throw new Error("Redis client does not exist!");
      process.exit(1);
    }

    // fetch records of current user using IP address, returns null when no record is found

    let data = await redisClient.get(ip);
    try {
      data = JSON.parse(data);
    } catch (e) {
      console.log("Inside data try catch");
      data = null;
    }

    if (data) {
      console.log("Inside data if");
      const windowStart = moment(data.lastWindow);
      const difference = moment().diff(windowStart, "hours", true);

      if (difference < WINDOW_SIZE_IN_HOURS) {
        // calculate number of requests user has made within window
        if (data.count >= MAX_WINDOW_REQUEST_COUNT) {
          return res.status(429).json({
            message: "You have exceeded the 3 requests in 1 hour limit!",
          });
        } else {
          data.count += 1;
          data.lastWindow = moment().format();

          redisClient.set(ip, JSON.stringify(data));

          next();
        }
      } else {
        next();
      }
    } else {
      console.log("Inside data if else");
      data = {
        count: 1,
        lastWindow: moment().format(),
      };

      redisClient.set(ip, JSON.stringify(data));
      next();
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { customRedisRateLimiter };
