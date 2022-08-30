import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';

export default function Footer() {
  const {pathname}=useLocation();
  if(pathname==='/') return null;
  return (
    <div>
        <div className='footer'>
          <div className='row'>
            <div className='col-3'>
              <h1 className='footerh1'>GRILL</h1>
              <center>
            <Link className='icon' to='/'><i class="fa-brands fa-square-facebook"></i></Link>
            <Link className='icon' to='/'><i class="fa-brands fa-instagram"></i></Link>
            <Link className='icon' to='/'><i class="fa-brands fa-whatsapp"></i></Link>
            <Link className='icon' to='/'><i class="fa-solid fa-envelope"></i></Link>
            </center>
            </div>
            <div className='col-3'>
              <h1 className='footerh1'>Support</h1>
              <Link to="/contact" className='footerl'>Contact us</Link>
              <Link to="/contact" className='footerl'>FAQ</Link>
              <Link to="/contact" className='footerl'>Policy</Link>
              <Link to="/contact" className='footerl'>Terams & Condition</Link>
            </div>

            
            <div className='col-3'>
              <h1  className='footerh1'>Food</h1>
              <Link to="/menu" className='footerl'>Pistha</Link>
              <Link to="/menu" className='footerl'>Pizza</Link>
              <Link to="/menu" className='footerl'>Meals</Link>
              <Link to="/menu" className='footerl'>Russian</Link>
            </div>
            <div className='col-3'> 
            <h1 className='footerh1'>Instagram Feed</h1>
            <Link to="/menu" className='image' ><img src='meals.jpg' style={{width:'70',height:'50px'}}></img></Link>
            <Link to="/menu" className='image'><img src='noodles.jpg' style={{width:'70px',height:'50px'}}></img></Link>
            <Link to="/menu" className='image'><img src='pistha.jpeg' style={{width:'70px',height:'50px'}}></img></Link>
            <Link to="/menu" className='image'><img src='russian.jpeg' style={{width:'70px',height:'50px'}}></img></Link>
            <Link to="/menu"className='image' ><img src='dd.jpg' style={{width:'70px',height:'50px'}}></img></Link>
            <Link to="/menu"className='image' ><img src='burger.webp' style={{width:'70px',height:'50px'}}></img></Link>
            
              
              </div>

          </div>
        </div>
    </div>
  )
}
