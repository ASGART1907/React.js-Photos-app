import React,{useState,useRef} from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

  const [active,setActive] = useState("home");

  return (
    <div className='nav'>
        <h3>Photos App</h3>
        <div className={active}></div>
        <ul>
            <li 
               onClick={() => setActive("home")}
               ><Link to="/" className='link'>Home</Link></li>
            <li 
               onClick={() => setActive("images")}
               id="list2"><Link to="/images" className='link'>Images</Link></li>
        </ul>
    </div>
  )
}

export default Nav;