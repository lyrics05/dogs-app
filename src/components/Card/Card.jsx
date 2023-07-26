import React from 'react';
import { useSelector } from 'react-redux';
import loading from '../../img/perro-imagen-animada-0863.gif';
import { addFavorite } from '../../redux/actions/actions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from '../Card/Card.module.css';
import { useState } from 'react';
import swal from 'sweetalert';
import Pagination from '../Pagination/Pagination';

const Card = () => {
  const dogs = useSelector((state) => state.dogs);
  const [pagina, setPagina] = useState(1);
  const currentPage = useSelector((state) => state.currentPage);
  const [dogsPerPage, setDogssPerPage] = useState(8);
  const lastDogPage = currentPage * dogsPerPage;
  const firstDogPage = lastDogPage - dogsPerPage;
  const showDogsPage = dogs.slice(firstDogPage, lastDogPage );
  const maximo = Math.ceil(dogs.length / dogsPerPage);

  const dispatch = useDispatch();

  const handleFavorite = (id) => {
    const dog = dogs.find((d) => d.id == id);
    swal('added to favorites');
    dispatch(addFavorite(dog));
  };

  return (
    <div>
      <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo} />
      <div className={styles.cardContainer}>
        {showDogsPage.length ? (
          showDogsPage.map((d) => {
            return (
              <div className={styles.containerInfo} key={d.id}>
                <Link to={`/dog/${d.id}`}>
                  <p className={styles.numId}>{d.id}</p>
                </Link>
                <Link to={`/dog/${d.id}`}>
                  <p className={styles.name}>{d.name}</p>
                </Link>
                <Link to={`/dog/${d.id}`}>
                  <img className={styles.img} src={d.image.url} alt="" />
                </Link>
                <button
                  className={styles.buttonCard}
                  onClick={() => handleFavorite(d.id)}
                >
                  Add to Favorites
                </button>
              </div>
            );
          })
        ) : (
          <div className={styles.containerLoader}>
            <h1>Loading...</h1>
            <img className={styles.imgLoading} src={loading} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
