import { ADD_WORD, DELETE_WORD, TRANSLATE_WORD } from './dictionaryTypes';

export const addWord = (word) => ({
    type: ADD_WORD,
    payload: word,
});

export const deleteWord = (word) => ({
    type: DELETE_WORD,
    payload: word,
});

export const translateWord = (word) => ({
    type: TRANSLATE_WORD,
    payload: word,
});
