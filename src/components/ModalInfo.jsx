import { motion } from "framer-motion";

const ModalInfo = ({ visible, message, onClose, buttonText, onButtonClick, title, children }) => {
    if (!visible) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <motion.div
                className="modal"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2>{title}</h2>

                {/* Mensaje opcional (puede usarse para mostrar notificaciones o texto adicional) */}
                {message && <p>{message}</p>}

                {/* Contenido del modal, como el formulario o cualquier otro contenido */}
                {children}

                {/* Botones: Confirmar y Cerrar */}
                <div className="modal-buttons">
                    {buttonText && (
                        <button onClick={onButtonClick}>
                            {buttonText}
                        </button>
                    )}
                    <button onClick={onClose}>Cerrar</button>
                </div>
            </motion.div>
        </div>
    );
};

export default ModalInfo;