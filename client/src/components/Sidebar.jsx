import { useStickyBox } from "react-sticky-box";
import { NavLink } from 'react-router-dom';

//Components

const Sidebar = () => {
  const stickyRef = useStickyBox({
    offsetTop: 20,
    offsetBottom: 20,
    bottom: false
  })

  // ----- Render -----

  return (
    <div className="sidebar" ref={stickyRef}>
      <h2>Choose :</h2>
      <NavLink to="/cardpayment">Card payment</NavLink>
      <NavLink to="/datepicker">Date picker</NavLink>
      <NavLink to="/formvalidation">Form validation</NavLink>
      <NavLink to="/customcounter">Custom counter</NavLink>
      <NavLink to="/avatarselector">Avatar selector</NavLink>
      <NavLink to="/listmanagement">List management</NavLink>
      <NavLink to="/languageselector">Language selector</NavLink>
      <NavLink to="/moviesearch">Movie Search</NavLink>
    </div>
  )
};

export default Sidebar;