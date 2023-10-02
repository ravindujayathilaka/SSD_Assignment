import React,{useState} from "react";
import img1 from "../images/aa.png";
import './Company.css';
import axios from "axios";
import swal from "sweetalert";
import Popup from "./Popup";
import {
  Link
} from "react-router-dom"

export default function CompanyRequest(){


      /*create state*/
const [Company_Id,setcompanyid] = useState("");
const [Contact_Name,setcontactname] = useState("");
const [Company_Email,setcompanyEmail] = useState("");
const [Company_contactNo,setcontactno] = useState("");
const [Product_Id,setproductid] = useState("");
const [Product_Name,setproname] = useState("");
const [Quentity,setqueantity] = useState("");
const [isError,setIsError] = useState(false);

const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }


function sendcompanyData(e){
    e.preventDefault();
    swal ({
      title:"Going to add new Request",
      text:"Do you want to add request?",
      icon:"warning",
      buttons: true,
      dangerMode: true
      
    }).then(Response=>{
      if(Response){
        {
          if( Company_Id=="" || Product_Id=="" || Quentity==""){
           alert("Please fill the required fields")}
          else if(Company_contactNo.length<=9){
            alert("Please Enter valied phone number") 
          }else{
          axios.post("http://localhost:8000/api/companyRequest/add",newProduct).then(()=>{
            swal({text:"Company  Added",
                      icon:"success"
                      });
           
          }).catch((err)=>{
            alert(err)
            console.log(err);
          })}
      }
      }
    })

    const newProduct = {
      Company_Id,
      Contact_Name,
      Company_Email,
      Company_contactNo,
      Product_Id,
      Product_Name,
      Quentity
    }
    
}/* else{
    axios.post("http://localhost:8000/api/companyRequest/add",newProduct).then(()=>{
      swal({text:"Company  Added",
                icon:"success"
                });
     
    }).catch((err)=>{
      alert(err)
      console.log(err);
    })
}*/



    return(
      
      <center>
        <div>
          <div className="maindiv111" style={{/*border:"1px solid black",*/height:"900px", margin:"80px"}} >
             
            <div class="container12" style={{/*border:"1px solid black",*/height:"800px" }}>

                  <div className="container11" style={{ backgroundColor:""}}>
                  <section class = "div11" id="sec2">
		                  <h1>
                         <img src={img1} alt=""   style={{ width: "90%", height: "480px",borderBlockColor: "black",marginTop:"110px",paddingLeft:"4px",paddingRight:"4px"}}/> 
	                  	</h1>
	                 </section>
                   

                   { <Link to={`/priceCal`} 
                      className ="btn btn-outline-secondary" onClick={togglePopup} style={{marginTop:"70px",borderRadius:"15px", fontSize:"20px" ,marginLeft:"10px",marginRight:"20px" ,height:"50px",width:"180px"}}>
                      Calculator
                   </Link>}

                   <button class="btn btn-outline-secondary"  style={{marginTop:"70px",borderRadius:"15px", fontSize:"20px", padding:"4px" , height:"50px",width:"180px"}}  onClick={togglePopup}>Conditions</button>
                   
                   {isOpen && <Popup 
                     content={<>
                      <h2 style={{color:"green"}}>Product Summary</h2>
                      <div class="container111" style={{marginTop:"30px" ,fontSize:"20px", color:"black"}}>
                      <div class="row">

  <div class="col-sm-4">
    <div class="card bg-light mb-3">
      <div class="card-body">
        <h5 class="card-title">Fruits</h5>
        <p class="card-text">We can Supply fresh fruits for you</p>
        <center>
        <h5>FRU01-Mango</h5>
        <h5>FRU02-Banana</h5>
        <h5>FRU03-Guwawa</h5>
        <h5>FRU04-Orange</h5>
        <h5>FRU05-Pineapple</h5>
        </center>
        <a href="#" class="btn btn-outline-success">Back To Form</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card bg-light mb-3">
      <div class="card-body">
        <h5 class="card-title">Vegetables</h5>
        <p class="card-text">We can Supply fresh fruits for you</p>
        <center>
        <h5>VEG01-Pumpkin</h5>
        <h5>VEG02-Potato</h5>
        <h5>VEG03-Carrot</h5>
        <h5>VEG04-Tomato</h5>
        <h5>VEG05-Eggplant</h5>
        </center>
        <a href="#" class="btn btn-outline-success">Back To Form</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card bg-light mb-3">
      <div class="card-body">
        <h5 class="card-title">Seeds</h5>
        <p class="card-text">We can Supply fresh fruits for you</p>
        <center>
        <h5>SEED01-Corn Seed</h5>
        <h5>SEED02-Cocoa Beans</h5>
        <h5>SEED03-Coffee Seed</h5>
        <h5>SEED04-Soy Seed</h5>
        <h5>SEED05-Pumpkin Seed</h5>
        </center>
        <a href="#" class="btn btn-outline-success">Back To Form</a>
      </div>
    </div>
  </div>
</div>
  <p>rtbrg btrn bh hntu m6um rtbrg btrn bh hntu m6um rtbrg btrn bh hntu m6um rtbrg btrn bh hntu m6um</p>
</div>
     
      <button style={{color:"black",marginTop:"30px" ,border:"none", padding:"10px" , height:"50px",width:"200px"}}  onClick={togglePopup} href="#">Test button</button>
       </>}handleClose={togglePopup}></Popup> }
</div>

 <div className="container11" >
    <section class = "div11" id="sec2">

    <h2 style={{fontFamily:"courier",marginTop:"90px",color:"black"}}>Request wholesale Product</h2>

    <form onSubmit={sendcompanyData}>
    <div class="form-group col-sm-6 flex-column d-flex" style={{marginTop:"60px"}}>
      
      <input  onChange={(e)=>{setcompanyid(e.target.value);}}
       class="form-control" 
       id="exampleInputEmail1" 
       aria-describedby="emailHelp" 
       placeholder="Company ID" 
       maxLength={5}
       required/>
    </div>

    <div class="form-group col-sm-6 flex-column d-flex" style={{marginTop:"30px"}}>
   
      <input type="text" 
      error = {isError}
      onChange={(e)=>{setcontactname(e.target.value);
      if(e.target.value.length >10){
        setIsError(true);
      }}} 
      class="form-control" id="exampleInputPassword1" 
      placeholder="Company Contact No" 
      required/>
    </div>

    <div class="form-group col-sm-6 flex-column d-flex" style={{marginTop:"30px"}}>
     
      <input type="email" 
      onChange={(e)=>{setcompanyEmail(e.target.value);}} 
      class="form-control" id="exampleInputEmail1" 
      aria-describedby="emailHelp" 
      placeholder="Company Email" 
      required/>
    </div>

    <div class="form-group col-sm-6 flex-column d-flex" style={{marginTop:"30px"}}>
   
   <input type="text" 
   onChange={(e)=>{setcontactno(e.target.value);}} 
   class="form-control" 
   id="exampleInputPassword1" 
   placeholder="Contact No"
   required/>
 </div>

 <div class="form-group col-sm-6 flex-column d-flex" style={{marginTop:"30px"}}>
     
 <select id="inputState" class="form-control" onChange={(e)=>{setproductid(e.target.value);}} required>
        <option selected placeholder="">Choose ProductID...</option>
        <option>Mango-FRU1</option>
        <option>Banana-FRU2</option>
        <option>Guwawa-FRU3</option>
        <option>Beans-VEG1</option>
        <option>Carrot-VEG2</option>
        <option>Tomato-VEG3</option>
        <option>Potato-VEG4</option>
        <option>Pumpkin-VEG5</option>
      </select>
 </div>

 
    <div class="form-group col-sm-6 flex-column d-flex" style={{marginTop:"30px"}}>
      
      <select id="inputState" class="form-control" onChange={(e)=>{setproname(e.target.value);}} required>
        <option selected placeholder="">Choose Product...</option>
        <option>Mango</option>
        <option>Banana</option>
        <option>Guwawa</option>
        <option>Beans</option>
        <option>Carrot</option>
        <option>Tomato</option>
        <option>Potato</option>
        <option>Pumpkin</option>
      </select>
    </div>

    <div class="form-group col-sm-6 flex-column d-flex" style={{marginTop:"30px",marginBottom:"50px"}}>
      
      <input type="text" 
      onChange={(e)=>{setqueantity(e.target.value);}} 
      class="form-control" 
      id="exampleInputPassword1" 
      placeholder="Quantity" 
      required/>
    </div>

  
       <button type="submit"  class="btn btn-success"  style={{width:"200px"}}>Submit</button>
   </form>

	                  </section>
                  </div>

            </div>
            </div>
         </div>
      </center>
          )
}