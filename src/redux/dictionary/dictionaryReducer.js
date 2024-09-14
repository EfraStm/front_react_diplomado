import { ADD_WORD, DELETE_WORD, TRANSLATE_WORD } from './dictionaryTypes';

const initialState = {
    dictionary: [],    // Lista de palabras en el diccionario
    translation: null, // Resultado de la traducción
};

const dictionaryReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_WORD:
            return {
                ...state,
                dictionary: [...state.dictionary, action.payload], // Añadir palabra al diccionario
            };

        case DELETE_WORD:
            return {
                ...state,
                dictionary: state.dictionary.filter(word =>
                    word.es !== action.payload &&
                    word.en !== action.payload &&
                    word.pt !== action.payload
                ), // Elimina la palabra en cualquier idioma
            };

        case TRANSLATE_WORD:
            const foundWord = state.dictionary.find(word =>
                word.es === action.payload ||
                word.en === action.payload ||
                word.pt === action.payload
            );
            return {
                ...state,
                translation: foundWord || null, // Guarda la palabra traducida o null si no se encuentra
            };

        default:
            return state;
    }
};

export default dictionaryReducer;
;