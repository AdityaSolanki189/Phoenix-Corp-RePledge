import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Header.css';

export default function Header(){

    const navigate=useNavigate();

    return(

        <div className='holder'>
            <span className='logo'>Repledge</span>

            <button onClick={()=>{navigate('/login')}} class="signin">Sign In</button>
            
        </div>
    )
}