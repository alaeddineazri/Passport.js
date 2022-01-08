import { Link } from "react-router-dom";


const Navbar = ({user}) => {
    const logout = () => {
        window.open("http://localhost:5000/auth/logout", "_self");
      };
    return (
        <div className="navbar">
            <span className="logo"><Link to ="/" className="link">LOGO</Link></span>
            {user ? (<ul className="list">
                <li className="listItems">
                    <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="" className="avatar" />
                </li>
                <li className="listItems">MY NAME</li>
                <li className="listItems" onClick={logout} >LOGOUT</li>
            </ul>):(<Link to ="/login" className="link">LOGIN</Link>)}
            
        </div>
    )
}

export default Navbar
