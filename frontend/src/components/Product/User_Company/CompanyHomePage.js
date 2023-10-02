import PropTypes from 'prop-types'
//import img6 from "../images/img44.jpg";
import React, { Component } from 'react'
import vegetale from "../images/vegetable.jpg";
import fruit from "../images/fruits.jpg";
import seed from "../images/seeds.jpg";
import banner from "../images/banner.jpg";

export default function CompanyHomePage(){
  

    return (
      <div >
<div >
<section>
	<div class="hero" style={{backgroundColor: "#00ff99",
			padding:"20px",height:"300px",backgroundImage: `url(${banner})`,backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}}>
		
	</div>
</section>

<section>
	<div class="hero" style={{backgroundColor: "#00cc00",
			padding:"20px",height:"200px"}}>

            <h1 style={{textAlign:"center",fontSize:"35px",fontFamily: "Lucida Console, Courier New, monospace",color:"white", marginTop:"30px"}}>Request Your wholesale Produts From Here. This is the rigth palce for your chooses</h1>
		
	</div>
</section>


<div class="maindiv1" style={{padding: "60px",paddingTop: "5px",height:"500px"}}>

<div class="contaioner" style={{
    float:"left",
    width: "400px",
    height:"300px",
    margin: "10px",
    /*border:"1px solid black",*/
    padding: "10px",
    borderRadius: "260px",
    backgroundImage: `url(${vegetale})`,backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat', 
    boxShadow:" 10px 10px 10px green"
}}>
	<section class = "div" id="sec1">
		
    <div  style={{width:"300px" ,backgroundColor:"#b3cccc", textAlign:"center", borderRadius: "260px",padding:"18px"}}>
		<h1 style={{fontSize:"20px"}}>
			VEGETABLES
		</h1>
        </div>
		
	</section>
</div>

<div class="contaioner" style={{
    float:"left",
    width: "400px",
    height:"300px",
    margin: "10px",
    /*border:"1px solid black",*/
    padding: "20px",
    borderRadius: "260px",
    backgroundImage: `url(${fruit})`,backgroundSize: 'cover',
    boxShadow:" 10 10 10px green",
    backgroundRepeat: 'no-repeat', 
    boxShadow:" 10px 10px 10px green",
    }}>
	<section class = "div" id="sec2">
    <div  style={{width:"200px" ,backgroundColor:"#b3cccc", textAlign:"center",borderRadius: "260px",padding:"18px"}}>
		<h1 style={{fontSize:"20px"}}>
			FRUITS
		</h1>
        </div>
	</section>
</div>

<div class="contaioner" style={{
    float:"left",
    width: "400px",
    height:"300px",
    margin: "10px",
    /*border:"1px solid black",*/
    boxShadow:" 10px 10px 10px green",
    padding: "10px",
    borderRadius: "260px",
    backgroundImage: `url(${seed})`,backgroundSize:'cover',
    backgroundRepeat: 'no-repeat', 
}}>
	<section class = "div" id="sec2">
        <div  style={{width:"200px" ,backgroundColor:"#b3cccc", textAlign:"center",borderRadius: "260px", padding:"18px"}}>
		<h1 style={{fontSize:"20px"}}>
			SEEDS 
		</h1>
        </div>
	</section>
</div>

</div>
</div>

<section>
	<div class="hero" style={{backgroundColor: "none",
			padding:"20px",height:"200px"}}>
        <div style={{ backgroundColor:"#00ff99", padding:"30px"}}>
            <button style={{width:"400px",height:"50px",marginLeft:"500px",marginTop:"40px", backgroundColor:"black" ,color:"white"}}>Request</button>
        </div>
	</div>
</section>


</div>      
    )

}
