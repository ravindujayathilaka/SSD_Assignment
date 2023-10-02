const RegisterEvent = require("../models/RegistereventModel");

const addRegisterEvent = (req, res) => {
    const {Full_Name,Address,Email, Phone_Number,No_Guests} = req.body;
    const newRegisterEvent = new RegisterEvent({
        Full_Name,
        Address,
        Email,
        Phone_Number,
        No_Guests,
       
    });

    newRegisterEvent.save().then((createdRegisterEvent)=>{
        res.json(createdRegisterEvent);
    }).catch((err)=>{
        console.log(error);
    });
};
const getRegisterEvent = async(req,res)=>{
    try{
        const registerevent = await RegisterEvent.find();
        res.json(registerevent)
    }catch(error){
        res.status(400).json(error);
    }
}


module.exports = {
    addRegisterEvent,
    getRegisterEvent
}