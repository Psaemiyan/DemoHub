export default function Navbar()
{
    return <>
    <nav className="navbar">
        <div className="navbar-logo">
            <h1>NAME.</h1>
        </div>

        <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#product">Product</a></li>
        <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="navbar-cart">
            <button className="cart-button">Cart</button>
        </div>
    </nav>
    </>
}