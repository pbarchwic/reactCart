import './toolbar.scss';
import logo from '../../assets/images/logo.png';
import cart from '../../assets/icons/cart.png';


function Toolbar() {
    return (
        <nav className="toolbar">
  <div className="container">
    <div className="icons-wrapper">
      <img src={logo} alt="logo"/>
      <button className="cart">
        <img src={cart} alt="ikona"/>
        <span className="items-length">0</span>
        <div className="cart-content">

        </div>
      </button>
    </div>
  </div>
</nav>
    )
}

export default Toolbar;