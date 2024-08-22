import React from 'react';
import { useState } from 'react';
import { searchDog } from '../../redux/actions/actions';
import { useDispatch } from 'react-redux';
import { Link, redirect, useNavigate } from 'react-router-dom';
import styles from '../Search/Search.module.css';
import { Navigate } from 'react-router-dom'; 
import swal from 'sweetalert';
import { useSelector } from 'react-redux';

const Search = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate()
 
  

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
     if(!input){
      e.preventDefault()
      swal("please enter a breed");
     }else{
      e.preventDefault(); // Evita que el formulario se recargue
      dispatch(searchDog(input));
      setTimeout(()=>{
        navigate("/search")
      },2000)
     }

  }
  

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" placeholder="Search..." />
        <button type="submit" className={styles.buttonSearch}>Search</button>
      </form>
      <div>{/* Aquí puedes mostrar los resultados de búsqueda si lo deseas */}</div>
    </div>
  );
};

export default Search;
