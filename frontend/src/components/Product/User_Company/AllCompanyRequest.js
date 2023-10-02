import React, {useState,useEffect} from "react";
//import img1 from "./img1.png";
import axios from "axios";
//import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";


import {getAllCompany} from '../productManagementService';


export default function AllProducts(){

    const [company,setRequest] = useState([]);

    useEffect(()=>{
        getAllCompany().then((data)=>{
            console.log("data>>", data.data.existingPosts)
            setRequest(data.data.existingPosts)
        })
        
    },[])
     
    

      const onDelete= (id)=>{
          axios.delete(`http://localhost:8000/api/companyRequest/delete/${id}`).then((response)=>{
            swal ({
                title:"Delete Company Requests",
                text:"Do you want to delete?",
                icon:"warning",
                buttons: true,
                dangerMode: true
            }).then(response=>{
                swal({text:"Company Request Deleted",
                icon:"success"
                });
            })
            
          })
    };

return(
  <div>
    <center><h1>All Company Requests</h1> 
        <div class="row" >
            {company && company.map((company,index)=>(
              <div class="col-4" style={{paddingBottom:"30px"}}>
                          

<div className="product-title123" style={{border:"2px solid green"}} >

<div className="inputdiv12" >
     <div className="inputdiv123">
        <p style={{ fontSize: "20px",textAlign:"center", paddingBottom:"30px"}}>
     Request No -<b>{index+1}</b>
    </p>
        </div>
   
    <p style={{ fontSize: "20px",textAlign:"left" }}>
     Company Id-<b>{company.Company_Id}</b>
    </p>
    <p style={{ fontSize: "20px",textAlign:"left" }}>
    Product Name-<b> {company.Product_Name}</b>
    </p>
   {/* <p style={{ fontSize: "20px",textAlign:"left"}}>
     Contact Name-<b> {company.Contact_Name}</b>
            </p>*/}
    <p style={{ fontSize: "20px",textAlign:"left"}}>
     Product ID-<b> {company.Product_Id}</b>
    </p>
    <p style={{ fontSize: "20px",textAlign:"left" }}>
     Contact No-<b>{company.Company_contactNo}</b>
    </p>
    <p style={{ fontSize: "20px",textAlign:"left"}}>
     Quantity-<b>{company.Quentity}</b>
    </p>
    </div>

<tr className="button222"> 
<td className="button ">
 <a className ="btn btn-warning" style={{backgroundColor:"white", border:"3px solid green", color:"green",margin:"10px"}} href="https://outlook.office.com/mail/" >
    <i className="fas fa-edit"  ></i>&nbsp;Confirm</a>&nbsp; 

<a className ="btn btn-danger" style={{backgroundColor:"white", border:"3px solid green", color:"green",margin:"10px"}} onClick={()=> onDelete(company._id)}>
    <i className="far fa-trash-alt"></i>&nbsp;DELETE</a>
</td>
</tr>
</div>
</div>
                  
    

     ))}
  </div></center>
 </div> 
        
  )    
}


