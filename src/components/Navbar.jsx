import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Importar useSelector para acceder al estado de Redux
import '../App.css';

const Navbar = () => {
    // Aqui se obtiene username y email desde el store de Redux
    const { username, email } = useSelector(state => state.form.formData);

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/default">Default</Link>
                </li>
                <li>
                    <Link to="/products">Product</Link>
                </li>
                <li>
                    <Link to="/login">LoginForm</Link>
                </li>
                <li className="navbar-user-info">
                    Bienvenido:
                    {username && email ? (
                        <>
                            <span> {username}</span>
                            <span> ({email})</span>
                        </>
                    ) : null}
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
