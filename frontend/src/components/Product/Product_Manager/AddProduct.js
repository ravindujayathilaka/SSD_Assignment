import React,{useState} from "react";
import img44 from "../images/upselling.jpg";
import axios from "axios";
import swal from "sweetalert"
import {
  Link
} from "react-router-dom"


export default function AddProduct(){

  /*01--create state*/
const [SId,setsid] = useState("");
const [ScontactNo,setcono] = useState("");
const [PId,setpid] = useState("");
const [PName,setpname] = useState("");
const [Quentity,setQno] = useState("");

/*02--add*/
function sendData(e){
    e.preventDefault();
    swal ({
      title:"Going to add new product",
      text:"Do you want to add?",
      icon:"warning",
      buttons: true,
      dangerMode: true
      
    }).then(respuesta=>{
       if(respuesta){
        axios.post("http://localhost:8000/api/wholesale/add",newProduct).then(()=>{
          swal({text:"Product Added",
                icon:"success"
                });
    
         
        }).catch((err)=>{
          alert(err)
          console.log(err);
        })
       }
    })

    const newProduct = {
      SId,
      ScontactNo,
      PId,
      PName,
      Quentity
    }


    /*Add Validations*/
    
   
    /*url*/
    /*if( PId=="" || PName=="" || Quentity==""){
            alert("Please fill the required fields")
    }else{
      axios.post("http://localhost:8000/api/wholesale/add",newProduct).then(()=>{
        alert("Product Added");
  
       
      }).catch((err)=>{
        alert(err)
        console.log(err);
      })
  }*/
  
  
    }
 

return(
  
  <div>
    <center>
    <div className="maindiv111" style={{/*border:"2px solid black",*/ margin:"50px"}} >
       
      <div class="container12" style={{/*border:"2px solid green",*/margin:"5px"}}>

            <div className="container11" /*style={{ }}*/ style={{ backgroundColor:"white"}}>
            <section class = "div11" id="sec2">
                <h1>
                   <img src={img44} alt=""   style={{ width: "90%", height: "480px",borderBlockColor: "black",marginTop:"110px",paddingLeft:"4px",paddingRight:"4px"}}/> 
                </h1>
             </section>
            </div>

<div className="container11"style={{ backgroundColor:"white"}} >

  <section class = "div11" id="sec2">

    <h2 style={{fontFamily:"courier",marginTop:"90px",color:"black"}}>Add Supplier wholesale Product Details</h2>

    <form onSubmit={sendData}>
    <div class="form-group col-sm-6 flex-column d-flex" style={{marginTop:"60px"}}>
      
      <input  onChange={(e)=>{setsid(e.target.value);}} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Supplier ID" required/>
    </div>

    <div class="form-group col-sm-6 flex-column d-flex" style={{marginTop:"30px"}}>
   
      <input type="text" onChange={(e)=>{setcono(e.target.value);}} class="form-control" id="exampleInputPassword1" placeholder="Supplier Contact No" required/>
    </div>

    <div class="form-group col-sm-6 flex-column d-flex" style={{marginTop:"30px"}}>
     
      <input type="text" onChange={(e)=>{setpid(e.target.value);}} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Product ID" required/>
    </div>

 
    <div class="form-group col-sm-6 flex-column d-flex" style={{marginTop:"30px"}}>
      
      <select id="inputState" class="form-control" onChange={(e)=>{setpname(e.target.value);}} required>
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
       <input type="text" onChange={(e)=>{setQno(e.target.value);}} class="form-control" id="exampleInputPassword1" placeholder="Quantity" required/>
       <div class="invalid-feedback">
        Please provide a valid city.
      </div>   
    </div>
     
       <button type="submit"  class="btn btn-success"  style={{width:"200px"}}>Submit</button>
   </form>

  </section>
     </div>

    </div>
  </div>
  </center>
  { <Link to={`/stock`} 
     class="btn btn-success"   style={{marginTop:"10px",marginBottom:"30px",borderRadius:"5px", fontSize:"20px",marginLeft:"150px" ,marginRight:"20px" ,height:"45px",width:"180px"}}>
       Stock Details
  </Link>}
</div>

    )
}