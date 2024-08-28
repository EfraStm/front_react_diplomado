import { SET_FORM_DATA, CLEAR_PASSWORD_ERROR, CLEAR_FORM_DATA } from './formTypes';
export const saveFormData = (formData) => {
    return {
        type: SET_FORM_DATA,
        payload: formData,
    };
};
export const clearPasswordError = () => {
    return {
        type: CLEAR_PASSWORD_ERROR,
    };
};
export const clearFormData = () => {
    return {
        type: CLEAR_FORM_DATA,
    };
};