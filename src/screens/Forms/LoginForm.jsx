import useForm from "../../hooks/useForm";
import { useSelector, useDispatch } from 'react-redux';
import { saveFormData, clearPasswordError, clearFormData } from "../../redux/form/formActions";
import { motion } from "framer-motion";
import ModalInfo from "../../components/ModalInfo";
import { useState, useEffect } from "react";

const LoginForm = () => {
    const [values, handleChange, resetForm] = useForm({ username: '', email: '', password: '', showPassword: false });
    const [showModalInfo, setShowModalInfo] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const form = useSelector(state => state.form);
    const dispatch = useDispatch();

    useEffect(() => {
        // Mostrar el mensaje de error de contraseña cada vez que cambia el estado `passwordError`
        if (form.passwordError) {
            setModalMessage(form.passwordError);
            setShowModalInfo(true);
        } else {
            setShowModalInfo(false);
        }
    }, [form.passwordError]);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(saveFormData(values)); // Intenta guardar los datos del formulario
    };

    const handleLogout = () => {
        resetForm(); // Resetea el formulario local
        dispatch(clearFormData()); // Limpia todos los datos del formulario y el error de contraseña
        setShowLogoutModal(false); // Cierra el modal de confirmación de logout
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="container">
                <ModalInfo
                    visible={showModalInfo}
                    message={modalMessage}
                    onClose={() => setShowModalInfo(false)}
                />
                <ModalInfo
                    visible={showLogoutModal}
                    message="¿Estás seguro de que quieres salir?"
                    buttonText="Presiona para salir"
                    onButtonClick={handleLogout}
                    onClose={() => setShowLogoutModal(false)}
                />
                <form onSubmit={handleSubmit}>
                    <h5>Username: {form.formData.username}</h5>
                    <h5>Email: {form.formData.email}</h5>

                    <div>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={values.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type={values.showPassword ? 'text' : 'password'}
                            id="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={() => dispatch(clearPasswordError())}
                        />
                        <button
                            type="button"
                            onClick={() => handleChange({ target: { name: 'showPassword', value: !values.showPassword } })}
                        >
                            {values.showPassword ? 'Ocultar' : 'Mostrar'}
                        </button>
                    </div>
                    <div className="button-container">
                        <button type="submit">Enviar</button>
                        <button
                            type="button"
                            onClick={() => setShowLogoutModal(true)}
                        >
                            Logout
                        </button>
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export default LoginForm;
