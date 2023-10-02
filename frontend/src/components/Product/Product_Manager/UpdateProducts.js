import React, {useState,useEffect} from "react";
import axios from "axios";
import { useLocation, useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";




export default function UpdateProducts(props) {
  const navigate = useNavigate();
 //const {query} = useLocation();
 //const {product} = useParams()
 console.log("props>>", props.location)

const {id, name, quantity} = useParams();

const [Pid, setId] = useState();
const [Pname, setName] = useState();
const [Pquantity, setQuantity] = useState();


useEffect(() => {  
   setId(id);
   setName(name); 
   setQuantity(quantity) 
}, [])

const onUpdate = (e) => {
  e.preventDefault()
  axios.put(`http://localhost:8000/api/wholesale/update/${Pid}`, {
      'Quentity': Pquantity,
    })
    .then((response) => {
      swal({text:"Updated Successfully",
      icon:"success"
      });
      navigate(-1)
    });
};



    return(

      
    <div>
      
      <center>
  <div class="containerupdate "  style={{ 
                   
                    //backgroundImage: "url(img1.png)",
                    marginLeft: "25%",
                    marginTop: "20px",
                    color:"white",
                    width:"1100px",
                    margin:" 20px",
                    padding: "50px 50px 20px 50px"}}>
 <h2 style={{color:"black"}}>UPDATE PRODUCTS</h2>

  <form class="form-horizontal"   style={{ 
                  
                    border:"3px solid black",
                    width:"600px",
                    margin:" 20px",
                    padding: "50px 50px 20px 50px",
                    boxShadow: " 5px 10px #c5ebd8"
                   }}>


    <div class="form-group123">
      <label  for="PId">Product ID:</label>
      <div>          
        <input value={Pid} onChange={(e) => {
         setId(e.target.value);
         }} type="text" class="form-control" id="PId" disabled placeholder="" name="pid" style={{ backgroundColor: " white", width:"500px",border:"1px solid black"}} />
      </div>
    </div>

    <div class="form-group123">
      <label  for="PName">Product Name:</label>
      <div >          
        <input value={Pname}  onChange={(e) => {
          setName(e.target.value);
          }} type="text" class="form-control" id="PName" disabled placeholder="" name="pname" style={{ backgroundColor: " white", width:"500px",border:"1px solid black",}} />
      </div>
    </div>

    <div class="form-group123">
      <label for="Quentity">Quentity:</label>
      <div >          
        <input value={Pquantity} onChange={(e) => {
        setQuantity(e.target.value);
        }} type="text" class="form-control" id="Quentity" placeholder="" name="Quentity" style={{ backgroundColor: " white", width:"500px",border:"1px solid black",}}/>
      </div>
    </div>




    <div class="form-group123">        
      <div class="col-sm-offset-2 col-sm-10" >
        <button type="submit"  class="btn btn-success"  style={{width:"200px",color:"black",marginTop:"10px" ,border:"3px solid green", backgroundColor:"white"}} onClick={onUpdate} >Submit</button>
      </div>
    </div>

  </form>
</div>
</center>
    </div>
    )  
  
}

