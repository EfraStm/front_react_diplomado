import { SET_FORM_DATA, CLEAR_PASSWORD_ERROR, CLEAR_FORM_DATA ,PASSWORD_DATA} from './formTypes';

const initialState = {
    formData: {
        username: '',
        email: '',
        password: '',
    },
    passwordError: '', // Aqui manejamos el error de la contraseña
};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FORM_DATA: {
            const { password, ...rest } = action.payload;
            if (password && password !== PASSWORD_DATA) {
                // Ojo si la contraseña es incorrecta, no se actualiza el formData y se establece un mensaje de error
                return {
                    ...state,
                    passwordError: 'Contraseña incorrecta. Inténtelo de nuevo.',
                };
            }
            // Si la contraseña es correcta si se actualiza el formData
            return {
                ...state,
                formData: {
                    ...state.formData,
                    ...rest,
                    password: '',
                },
                passwordError: '', // Resetea el error si la contraseña es correcta
            };
        }
        case CLEAR_PASSWORD_ERROR: {
            return {
                ...state,
                passwordError: '',
            };
        }
        case CLEAR_FORM_DATA:
            return {
                ...state,
                formData: {
                    username: '',
                    email: '',
                    password: '',
                },
                passwordError: '', // Limpia el error de contraseña también
            };
        default:
            return state;
    }
};

export default formReducer;
