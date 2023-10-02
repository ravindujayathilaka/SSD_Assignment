import React, {useState,useEffect} from "react";
import topic from "../images/topic.png";
import './Product.css';
import axios from "axios";
import swal from "sweetalert";
import MaterialTable from 'material-table';
import PrintIcon from '@material-ui/icons/Print'
import jsPDF from 'jspdf'
import 'jspdf-autotable'


import {getAllProducts} from '../productManagementService'
import {
    Link
} from "react-router-dom"


export default function AllProducts(){

    const [products, setProducts] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    
    
    /*popup messages*/
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }


    useEffect(()=>{
        getAllProducts().then((data)=>{
            console.log("data>>", data.data.existingPosts)
            setProducts(data.data.existingPosts)
        })
        
    },[])

  {/*}  const onDelete= (id)=>{
        axios.delete(`http://localhost:8000/api/wholesale/delete/${id}`).then((response)=>{
          swal ({
              title:"Delete Unwanted Product Details",
              text:"Do you want to delete?",
              icon:"warning",
              buttons: true,
              dangerMode: true
          }).then(response=>{
              swal({text:"Unwanted Product Deleted",
              icon:"success"
              });
          })
          
        })
  };*/}
  

  /*get data from database*/
  const columns=[
    {title: "Supplier Id" , field:"SId" , type:"string"},
    {title: "Contact Number" , field:"ScontactNo" , type:"string"},
    {title: "Product ID" , field:"PId" , type:"string"},
    {title: "Product Name" , field:"PName" , type:"string"},
    {title: "Quentity" , field:"Quentity" , type:"string"},
    
]
 
/*downlord PDF function*/
  const downloadPdf = () => {
    const doc = new jsPDF()
    doc.text("Product Details", 30, 10)
    doc.autoTable({
      theme: "grid",
      columns: columns.map(col => ({ ...col, dataKey: col.field })),
      body:products 
    })
    doc.save('All Products .pdf')
  }

  
   /*return*/
    return(
        <div>
             <div className="img11pp"> <img
          src={topic}
          alt=""
          style={{
            width: "100%",
            height: "300px",
            borderBlockColor: "black",
          }}/></div>

{/*
  <input type="text"
   placeholder="Search.." 
   className="text111"
   name="search2"
   onChange ={(e)=>{
       setSearch(e.target.value);
   }}
   style={{border:"none",color:"black"}}
  
  
  />
<button type="submit" style={{color:"black"}}><i class="fa fa-search"></i></button>*/}

 <div className="containerPrint">

  <div class="container-fluid" style={{ marginBottom:"40px" ,marginTop:"60px" }} >
  <MaterialTable  style={{background:"#bdf2c9", marginBottom:"40px"}}
              title="AGROTEC- All Product Details "
              columns={columns}
              data={products}
              actions={[
                    {
                      icon: () => <PrintIcon />,// you can pass icon too
                      tooltip: "Export to Pdf",
                      onClick: () => downloadPdf(),
                      isFreeAction: true
                    }
                  ]}
              options={{
                    sorting: false,
                    search: true,
                    paging : false,
                    filtering :false,
                    actionsColumnIndex: -1}}/>      
  </div>
  </div>
                   { <Link to={`/productadd`} 
                      class="btn btn-success" onClick={togglePopup} 
                      style={{marginTop:"40px",border:"1px solid green",marginBottom:"70px",borderRadius:"5px", fontSize:"20px" ,marginLeft:"10px",marginRight:"20px" ,height:"45px",width:"180px"}}>
                       Add Product
                   </Link>}
  </div>
        
    )    
    
}

