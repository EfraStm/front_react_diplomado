import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalInfo from '../../components/ModalInfo';
import { addWord, deleteWord, translateWord } from '../../redux/dictionary/dictionaryActions';
import './Dictionary.css';

const Dictionary = () => {
    const [showAddModal, setShowAddModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showTranslateModal, setShowTranslateModal] = useState(false);

    const [newWord, setNewWord] = useState({ es: '', en: '', pt: '' });
    const [wordToDelete, setWordToDelete] = useState('');
    const [wordToTranslate, setWordToTranslate] = useState('');
    const [translatedWord, setTranslatedWord] = useState('');
    const [sourceLanguage, setSourceLanguage] = useState('es');
    const [targetLanguage, setTargetLanguage] = useState('en');
    const [deleteError, setDeleteError] = useState('');

    const dictionary = useSelector(state => state.dictionary.dictionary);
    const dispatch = useDispatch();

    const handleAddWord = () => {
        dispatch(addWord(newWord));
        setNewWord({ es: '', en: '', pt: '' });
        setShowAddModal(false);
    };

    const handleDeleteWord = () => {
        const wordFound = dictionary.find(word => Object.values(word).includes(wordToDelete));

        if (wordFound) {
            dispatch(deleteWord(wordToDelete));
            setWordToDelete('');
            setDeleteError('');
            setShowDeleteModal(false);
        } else {
            setDeleteError('La palabra no se encontró en el diccionario.');
        }
    };

    const handleTranslateWord = () => {
        if (!dictionary || !dictionary.length) {
            setTranslatedWord('El diccionario está vacío.');
            return;
        }

        const translated = dictionary.find(word => word[sourceLanguage] === wordToTranslate);

        if (translated) {
            setTranslatedWord(translated[targetLanguage] || 'Traducción no disponible.');
        } else {
            setTranslatedWord('La palabra no se encontró en el diccionario.');
        }
    };

    // Función para abrir el modal de traducción y limpiar los campos
    const handleOpenTranslateModal = () => {
        setWordToTranslate('');
        setTranslatedWord('');
        setShowTranslateModal(true);
    };

    // Función para cerrar el modal de eliminación y limpiar los campos
    const handleCloseDeleteModal = () => {
        setWordToDelete('');
        setDeleteError('');
        setShowDeleteModal(false);
    };

    return (
        <div className="dictionary-container">
            <h1>DICTIONARY USIP</h1>
            <p>
                Este módulo (diccionario) corresponde al recuperatorio del módulo-7 ReactJS. URL:
                <a href="https://EfraStm.github.io/front_react_diplomado" className="stlss">
                    https://EfraStm.github.io/front_react_diplomado
                </a>
            </p>
            <div className="dictionary-buttons">
                <button onClick={() => setShowAddModal(true)}>Agregar Palabra</button>
                <button onClick={() => setShowDeleteModal(true)}>Eliminar Palabra</button>
            </div>
            <div>
                <button onClick={handleOpenTranslateModal}>Traducir Palabra</button>
            </div>

            {/* Modal para agregar palabra */}
            <ModalInfo
                visible={showAddModal}
                onClose={() => setShowAddModal(false)}
                title="TRADUCTOR USIP"
                buttonText="Agregar"
                onButtonClick={handleAddWord}
            >
                <input
                    type="text"
                    placeholder="Español"
                    value={newWord.es}
                    onChange={e => setNewWord({...newWord, es: e.target.value})}
                />
                <input
                    type="text"
                    placeholder="Inglés"
                    value={newWord.en}
                    onChange={e => setNewWord({...newWord, en: e.target.value})}
                />
                <input
                    type="text"
                    placeholder="Portugués"
                    value={newWord.pt}
                    onChange={e => setNewWord({...newWord, pt: e.target.value})}
                />
            </ModalInfo>

            {/* Modal para eliminar palabra */}
            <ModalInfo
                visible={showDeleteModal}
                onClose={handleCloseDeleteModal}
                title="traductor USIP"
                buttonText="Eliminar"
                onButtonClick={handleDeleteWord}
            >
                <p>¿Qué palabra deseas eliminar?</p>
                <p>Puede escribir su palabra en ESPAÑOL, INGLÉS O PORTUGUÉS</p>
                <input
                    type="text"
                    placeholder="Palabra a eliminar"
                    value={wordToDelete}
                    onChange={e => setWordToDelete(e.target.value)}
                />
                {/* Mostrar el mensaje de error si la palabra no se encuentra */}
                {deleteError && <p className="error-message">{deleteError}</p>}
            </ModalInfo>

            {/* Modal para traducir palabra */}
            <ModalInfo
                visible={showTranslateModal}
                onClose={() => setShowTranslateModal(false)}
                title="traductor USIP"
                buttonText="Traducir"
                onButtonClick={handleTranslateWord}
            >
                <p>¿Qué palabra desea traducir en el diccionario?</p>
                <p>Agregue su palabra y después seleccione el idioma de traducción</p>
                <input
                    type="text"
                    placeholder="Palabra a traducir"
                    value={wordToTranslate}
                    onChange={e => setWordToTranslate(e.target.value)}
                />

                {/* Selección del idioma de origen */}
                <label>De:</label>
                <select value={sourceLanguage} onChange={e => setSourceLanguage(e.target.value)}>
                    <option value="es">Español</option>
                    <option value="en">Inglés</option>
                    <option value="pt">Portugués</option>
                </select>

                {/* Selección del idioma de destino */}
                <label>A:</label>
                <select value={targetLanguage} onChange={e => setTargetLanguage(e.target.value)}>
                    <option value="es">Español</option>
                    <option value="en">Inglés</option>
                    <option value="pt">Portugués</option>
                </select>

                {/* Muestra el resultado de la traducción */}
                {translatedWord && <textarea readOnly value={translatedWord}/>}
            </ModalInfo>
        </div>
    );
};

export default Dictionary;
