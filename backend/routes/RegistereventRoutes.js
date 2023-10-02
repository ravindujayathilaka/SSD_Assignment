const express = require("express");
const router = express.Router();

const{
    addRegisterEvent,
    getRegisterEvent
} = require("../controllers/RegistereventController");


router.get("/all",getRegisterEvent);
router.post("/",addRegisterEvent);
module.exports = router;