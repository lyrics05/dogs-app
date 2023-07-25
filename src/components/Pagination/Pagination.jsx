import React, {useState} from 'react';
import styles from '../Pagination/Pagination.module.css';
import derecha from "../../img/flecha-correcta.png"
import izquierda from "../../img/flecha-izquierda.png"

const Pagination = ({pagina, setPagina, maximo}) => {
  const [input, setInput] = useState (1);

  const nextPage = () => {
    setInput (parseInt(input) + 1);
    setPagina (parseInt(pagina) + 1);
  };

  const previousPage = () => {
    setInput (parseInt(input) - 1);
    setPagina (parseInt(pagina) - 1);
  };

  const onKeyDown = e => {
    if (e.keyCode == 13) {
      setPagina (parseInt (e.target.value));
      if (
        parseInt (e.target.value < 1) ||
        parseInt (e.target.value) > Math.ceil (maximo) ||
        isNaN (parseInt (e.target.value))
      ) {
        setPagina (1);
        setInput (1);
      } else {
        setPagina (parseInt (e.target.value));
      }
    }
  };

  const onChange = e => {
    setInput (e.target.value);
  };

  return (
    <div className={styles.container}>
      <button className={styles.buttonPagi} disabled={pagina === 1 || pagina < 1} onClick={previousPage}>
          <img className={styles.flecha} src={izquierda} alt="" />
      </button>
      <input
      className={styles.inputPagi}
        onChange={e => onChange (e)}
        onKeyDown={e => onKeyDown (e)}
        name="page"
        autoComplete="off"
        value={input}
      />
      <p className={styles.inputP}> de {maximo} </p>
      <button
         className={styles.buttonPagi}
        disabled={pagina === Math.ceil (maximo) || pagina > Math.ceil (maximo)}
        onClick={nextPage}
      >
       <img className={styles.flecha} src={derecha} alt="" />
      </button>
    </div>
  );
};

export default Pagination


