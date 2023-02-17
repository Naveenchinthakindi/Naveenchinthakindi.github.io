import { useEffect, useState } from "react";
// import { Nav } from "react-bootstrap";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
  }, []);
  const chnagebackground=()=>{
    if(window.scrollY>=30){
      setShow(true)
    }else{
      setShow(false)
    }
  }
window.addEventListener('scroll',chnagebackground)
  return (
   <div>
  <nav className={show ? 'nav__black':''} >
    <img className="nav__logo " src="netflix-logo.png"/>
    <img className="nav__avatar" src="Netflix-avatar.png"/>
  </nav>
  
   </div>
  );
};

export default Navbar;
