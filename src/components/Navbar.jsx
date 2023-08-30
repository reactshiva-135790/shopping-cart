import {image }  from "../assets/Assets"

const Navbar = () => {
    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img
                            src={image }
                            alt="Logo"
                            width={90}
                            height={40}
                            className="d-inline-block align-text-top"
                        />
                        Shopping Cart
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Navbar