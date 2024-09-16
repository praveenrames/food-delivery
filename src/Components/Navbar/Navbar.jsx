import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext.jsx';
import { assets } from '../../assets/assets.js';
import './Navbar.css';

const Navbar = ({setShowLogin}) => {
    const [menu,setMenu]=useState('home');
    const {getTotalCartAmount}=useContext(StoreContext);
    return (
        <div className='navbar'>
            <Link to='/'><img src={assets.logo} alt="" className='log' /></Link>
            <ul className='navbar-menu'>
                <Link to='/' onClick={()=>setMenu('home')} className={menu==='home'?'active':''}>Home</Link>
                <a href='#explore-menu' onClick={()=>setMenu('menu')} className={menu==='menu'?'active':""}>Menu</a>
                <a href="#app-dowload" onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
                <a href='#footer' onClick={()=>setMenu('contact-us')} className={menu==='Contact-us'?'active':''}>Contact us</a>
            </ul>
            <div className='navbar-right'>
                <img src={assets.searchIcon} alt="" />
            <div className='navbar-search-icon'>
                <Link to='/cart'><img src={assets.basketIcon} alt="" /></Link>
                <div className={getTotalCartAmount()===0?'':'dot'}>

                </div>
            </div>
              
              <button onClick={()=>setShowLogin(true)}>sign in</button>
            </div>
        </div>
    )
}
export default Navbar;