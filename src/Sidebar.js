import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h4><Link to="/">Yelp People</Link></h4>
                <p><Link to="/US">United States</Link></p>
                <p><Link to="/BR">Brazil</Link></p>
                <p><Link to="/NZ">New Zealand</Link></p>
                <p><Link to="/GB">United Kingdom</Link></p>
                <p><Link to="/TR">Turkey</Link></p>
                <p><Link to="/AU">Australia</Link></p>
                <p><Link to="/FR">France</Link></p>
                <p><Link to="/CA">Canada</Link></p>
                <p><Link to="/CH">Switzerland</Link></p>
                <p><Link to="/ES">Spain</Link></p>
            </div>
            <div className="sidebar__bottom">
                <p>Contact</p>
                <p>About Us</p>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                <Link to="/" className="navbar-brand">Yelp people</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <p><Link to="/US">United States</Link></p>
                    <p><Link to="/BR">Brazil</Link></p>
                    <p><Link to="/NZ">New Zealand</Link></p>
                    <p><Link to="/GB">United Kingdom</Link></p>
                    <p><Link to="/TR">Turkey</Link></p>
                    <p><Link to="/AU">Australia</Link></p>
                    <p><Link to="/FR">France</Link></p>
                    <p><Link to="/CA">Canada</Link></p>
                    <p><Link to="/CH">Switzerland</Link></p>
                    <p><Link to="/ES">Spain</Link></p>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    );
}

export default Sidebar;