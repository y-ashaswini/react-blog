import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
        <div className="nav">
            <Link className="logo" to="/">
                Blogue.
            </Link>
            <div className="items">
                <Link className="item" to="/">
                    Home
                </Link>
                <Link className="item" to="/add">
                    Add
                </Link>
            </div>

        </div>
    )
}