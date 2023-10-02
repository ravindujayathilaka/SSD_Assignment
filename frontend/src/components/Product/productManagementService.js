import axios from 'axios'


//Get All Product  
const HOST = "http://localhost:8000/api"

export const getAllProducts = async () =>{
    try{
        const response = await axios.get(`${HOST}/wholesale/read`)
        return response
    }catch(error){
        console.log("error while retrieving data",error)
        return false;
    }
}


//Get All Compamy Requests
export const getAllCompany = async () =>{
    try{
        const response = await axios.get(`${HOST}/companyRequest/read`)
        return response
    }catch(error){
        console.log("error while retrieving data",error)
        return false;
    }
}


