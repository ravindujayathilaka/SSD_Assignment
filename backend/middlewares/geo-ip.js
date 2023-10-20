const axios = require("axios");

const processGeoIp = async (req, res, next) => {
  try {
    const ip = req.headers["ip"];

    const geo = await axios.get(`https://api.country.is/${ip}`).then((res) => {
      return res.data;
    });

    console.log(geo);

    if (geo.country !== "LK") {
      return res
        .status(403)
        .json({ msg: "Sorry, this site is not available in your country" });
    }

    next();
  } catch (ex) {
    console.error(ex.message);
  }
};
module.exports = { processGeoIp };
