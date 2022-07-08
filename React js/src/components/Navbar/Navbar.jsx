import style from './Navbar.module.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (  
        <nav className = {style.navbar} >
            <h1>Taher blog</h1>
            <div className= {style.links}>
                <Link to="/">Home</Link>
                <Link to="/create">New blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;