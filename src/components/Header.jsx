import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <>
            <div classNameName="container">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom">
                    <div className="col-md-3 mb-2 mb-md-0">
                        <Link to="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                        </Link>
                    </div>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><Link to="#" className="nav-link px-2 link-secondary">Home</Link></li>
                        <li><Link to="/product" className="nav-link px-2">Products</Link></li>
                        <li><Link to="/cart" className="nav-link px-2">Cart</Link></li>
                        <li><Link to="#" className="nav-link px-2">FAQs</Link></li>
                        <li><Link to="#" className="nav-link px-2">About</Link></li>
                    </ul>

                    <div className="col-md-3 text-end">
                        <Link to="/login" className="btn btn-outline-primary me-2">Login</Link>
                        <Link to="/signup" className="btn btn-primary">Sign-up</Link>
                    </div>
                </header>
            </div>
        </>
    )
}

export default Header