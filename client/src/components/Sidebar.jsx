import { useStickyBox } from "react-sticky-box";

//Components
import ReactLogo from "../assets/images/anim-react-logo.png";

const Sidebar = () => {
  const stickyRef = useStickyBox({
    offsetTop: 20,
    offsetBottom: 20,
    bottom: false
  })

  return (
    <div className="container">
      <div className="sidebar" ref={stickyRef}>
        <img src={ReactLogo} alt='logo' style={{ width: '10em', height: 'auto' }} />
      </div>
      <div className="contents" ref={stickyRef}>
        <h2>Components</h2>
        <p>Card payment</p>
        <p>Date picker</p>
        <p>Form validation</p>
        <p>Custom counter</p>
        <p>Avatar selector</p>
        <p>List management</p>
        <p>Language selector</p>
      </div>
    </div>
  )
};

export default Sidebar;