import { useState } from "react";
import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './charSearchForm.scss';

const CharSearchForm = () => {
    const [char, setChar] = useState(null);
    const {loading, error, getCharacterByName, clearError} = useMarvelService();

    const onCharLoaded = (char) => {
        setChar(char);
    }

    const updateChar = (name) => {
        clearError();

        getCharacterByName(name)
            .then(onCharLoaded);
    }

    const errorMessage = error ? <div className="char__search-critical-error"><ErrorMessage /></div> : null;
    
}