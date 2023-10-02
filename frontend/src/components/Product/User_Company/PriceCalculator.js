import React, {useState} from 'react'

import './Company.css';

function PriceCalculator() {

  // state
  const [size, setSize] = useState(0)
  const [productid, setproductid] = useState(0)
  const [price, setprice] = useState('')
  const [message, setMessage] = useState('')

  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  
  


  let calcprice = (event) => {
    //prevent submitting
    event.preventDefault()

    if (size === 0 ) {
      alert('Please enter a valid weight and height')
    } if(productid==="FRU1" || productid === "VEG1"){
        let price = ( size * 100)
        setprice(price.toFixed(1))
        if(productid==="FRU1"){
           setMessage('Request Your Mango')
        }else{
            setMessage('Request Your Beans')
        }
    }else if(productid==="FRU2" || productid === "VEG2"){
        let price = ( size * 200)
        setprice(price.toFixed(1))
        if(productid==="FRU2"){
           setMessage('Request Your Banana')
        }else{
            setMessage('Request Your Tomato')
        }
    }else {
      let price = ( size * 20)
      setprice(price.toFixed(1))

      // Logic for message

     
    }
  }

  //show image
  let imgSrc;
  
  if(productid==="FRU1"){
    imgSrc = require('../images/mango.jpg')
  }else if(productid==="FRU2"){
    imgSrc = require('../images/banana.jpg')
  }


  let reload = () => {
    window.location.reload()
  }

  return (
    <div className="appCal">
      <div className='containerCal11'>
        <h2 className='centerCal11'>Wolesale Product Price Calculator</h2>
        <form onSubmit={calcprice}>
        <div>
            <label>Enter Product ID</label>
            <input className='inputCal11' value={productid} onChange={(e) => setproductid(e.target.value)} />
        </div>
          <div>
            <label>Product Size</label>
            <input className='inputCal11' value={size} onChange={(e) => setSize(e.target.value)} />
          </div>
          {/*<div>
            <label>Height (in)</label>
            <input value={height} onChange={(event) => setHeight(event.target.value)} />
            </div>*/}
          <div>
            <button className='btnCal11' type='submit'>Submit</button>
            <button className='btnCal11 btn-outlineCal11' onClick={reload} type='submit'>Reload</button>
          </div>
        </form>

        <div className='centerCal11'>
          <h3>Your Total Amount is Rs: {price}</h3>
          <p className='paraCal11'>{message}</p>
        </div>

        <div className='img-containerCal11'>
          <img src={imgSrc} alt=''></img>
        </div>

        <div>
            <button className='btnCal11' type='submit'>Request Product</button>
          </div>

    
      </div>
    </div>
  );
}

export default PriceCalculator;