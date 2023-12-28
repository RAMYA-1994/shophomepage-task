import React, { useState } from 'react'

function Card({cart,setCart}) {
let [toggle,setToggle]=useState(true)
// let [value, setvalue] = useState(0);
return<>
<div className="col mb-5">
    {/* <h1>{value}</h1> */}
    <div className="card h-100">
        <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Sale</div>
          <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
          <div className="card-body p-4">
            <div className="text-center">
            <h5 className="fw-bolder">Fancy Product</h5>
             $120.00 - $280.00
            </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent dark"> 
        <div className="text-center">
     {toggle?
        <button className="btn btn-outline-dark" onClick={() =>{ 
        setCart(cart + 1)
        setToggle(!toggle)
             }}> Add to card</button>:
          <button className="btn btn-outline-dark" onClick={()=>{
            setCart(current=>current-1)
                setToggle(current=>!current)
            
            }}>Remove from cart</button>
        }
        
    
                    </div>
                </div>
            </div>
        </div>
            </>
    }


export default Card