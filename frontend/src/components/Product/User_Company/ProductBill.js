import React,{useState} from "react";
import img6 from "../images/bill.jpg";
export default function CompanyRequest(){

  
  
    return(
        <div>
            
            <center>
     <div >
   
  <div class="container22" style={{}}>  
<form class="" style={{marginLeft:"450px", marginBottom:"20px", width:"500px", padding:"20px",border:"3px solid black"}}>
    <h2 className="h2topic22" style={{color:"black" , fontSize:"50px", marginLeft:"30px" }}>Your Bill</h2>

    <hr style={{color:"black"}}/>

    <h6 className="h2topic22" style={{color:"black" , marginLeft:"50px" ,fontSize:"20px",}}>Billing Content</h6>

    <div class="form-group">
            <div >
            <label style={{color:"black"}}>Name</label>  
        <input type="text" class="hinvoice" style={{ color:"black" ,backgroundColor: "white", width:"300px",padding:"10px",marginLeft:"70px",border:"none",borderBottom:"1px solid "}} 
       />
      </div>
    </div>

    <div class="form-group">
      <div >  
      <label style={{color:"black"}}>Company Name</label>          
        <input type="text" class="hinvoice" style={{ color:"black" , backgroundColor: " white", width:"300px",padding:"10px",margin:"10px",border:"none",borderBottom:"1px solid"}} />
      </div>
    </div>

    <div class="form-group">
      <div >
      <label style={{color:"black"}}>Email Address</label>  
        <input type="text" class="hinvoice" style={{ color:"black" , backgroundColor: " white", width:"300px",padding:"10px",margin:"10px",marginLeft:"20px",border:"none",borderBottom:"1px solid "}}  />
      </div>
    </div>

    <hr style={{color:"black"}}/>

    <h6 className="h2topic22" style={{color:"black" , marginLeft:"50px",fontSize:"20px", }}>Billing Summary</h6>
    
    <div class="form-group">
     <div>  
     <label style={{color:"black"}}>Product</label>          
        <input type="text" class="hinvoice" style={{ color:"black" , backgroundColor: " white", width:"300px",padding:"10px",margin:"10px",marginLeft:"75px",border:"none",borderBottom:"1px solid "}}  />
      </div>
    </div>

    <div class="form-group">
      <div >   
      <label style={{color:"black"}}>Quantity</label>         
        <input type="text" class="hinvoice" style={{ color:"black" , backgroundColor: " white", width:"300px", padding:"10px",margin:"10px",marginLeft:"65px",border:"none",borderBottom:"1px solid "}}/>
      </div>
    </div>

    <div class="form-group">
      <div > 
      <label style={{color:"black"}}>Price(1kg)</label>           
        <input type="text" class="hinvoice" style={{ color:"black" ,backgroundColor: " white", width:"300px",padding:"10px",margin:"10px",marginLeft:"45px",border:"none",borderBottom:"1px solid "}}/>
      </div>
    </div>

    <hr style={{color:"black"}}/>

    <div class="form-group">
      <div > 
      <label style={{color:"black"}}>Total</label>           
        <input type="text" class="hinvoice" style={{color:"black" , backgroundColor: "none", width:"300px",padding:"10px",margin:"10px",marginLeft:"40px",border:"none",borderBottom:"3px solid black",borderTop:"3px solid black"}}/>
      </div>
    </div>

    <hr style={{color:"black"}}/>
    
    


  </form>
  </div>
</div>

</center>



        </div>
    )

}