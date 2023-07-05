import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
    return(
        <>
            <link rel="stylesheet" href="/bootstrap/css/bootstrap.css" />
            <link rel="stylesheet" href="/css/Navbar.css" />
            <script src="/bootstrap/js/bootstrap.js"></script>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <   li class="nav-item active">
                            <Link to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/create">Create</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/edit">Edit</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/search">Search</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <Outlet />
        </>
    )
}