// Pagination.js
import React, { useState } from 'react';
import styles from '../Pagination/Pagination.module.css';
import derecha from "../../img/flecha-correcta.png";
import izquierda from "../../img/flecha-izquierda.png";
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../redux/actions/actions';

const Pagination = ({ setPagina, maximo }) => {
  const currentPage = useSelector((state) => state.currentPage);
  const [inputValue, setInputValue] = useState(currentPage);

  const dispatch = useDispatch();


  const nextPage = () => {
    if (currentPage < maximo) {
      const nextPageValue = currentPage + 1;
      dispatch(setPage(nextPageValue));
      setInputValue(nextPageValue);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      const previousPageValue = currentPage - 1;
      dispatch(setPage(previousPageValue));
      setInputValue(previousPageValue);
    }
  };
  function onKeyDown(e) {
    if (e.keyCode === 13) {
      const page = parseInt(e.target.value);

      if (page < 1 || page > Math.ceil(maximo) || isNaN(page)) {
        dispatch(setPage(1));
        setInputValue(1); // Actualizamos el valor del input
      } else {
        dispatch(setPage(page));
        setInputValue(page); // Actualizamos el valor del input
      }
    }
  }

  const onChange = (e) => {
    const parseado = parseInt(e.target.value, 10);
    const nextPage = isNaN(parseado) ? 1 : parseado;
    setInputValue(nextPage); // Actualizamos el valor del input
  };

  return (
    <div className={styles.container}>
      <button className={styles.buttonPagi} disabled={currentPage === 1 || currentPage < 1}>
        <img onClick={previousPage} className={styles.flecha} src={izquierda} alt="" />
      </button>
      <input
        className={styles.inputPagi}
        onChange={e => onChange(e)}
        onKeyDown={e => onKeyDown(e)}
        name="page"
        autoComplete="off"
        value={inputValue} // Usamos el valor del estado local inputValue
      />
      <p className={styles.inputP}> de {maximo} </p>
      <button
        className={styles.buttonPagi}
        disabled={currentPage === Math.ceil(maximo) || currentPage > Math.ceil(maximo)}
      >
        <img onClick={nextPage} className={styles.flecha} src={derecha} alt="" />
      </button>
    </div>
  );
};

export default Pagination;
