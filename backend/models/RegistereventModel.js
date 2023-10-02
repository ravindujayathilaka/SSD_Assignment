const mongoose = require('mongoose')


const registereventSchema = new mongoose.Schema({

        Full_Name:String,
        Address:String,
        Email:String,
        Phone_Number:String,
        No_Guests:String,
      


});


    const RegistereventModel = mongoose.model("RegistereventModel", registereventSchema)
    module.exports = RegistereventModel;