import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from "../Favorites/Favorites.module.css"
import { deleteFvorite } from '../../redux/actions/actions'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'

const Favorites = () => {
    const favorito = useSelector((state) => state.favorites)
    const dispatch = useDispatch()
    function borrarFavorite(id){
        swal({
            title: "Are you sure?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Poof! Your dog has been deleted!", {
                icon: "success",
              });
              dispatch(deleteFvorite(id))
            }else {
              swal("Your dog is safe!");
            }
          });
    }
    return (
        <div className={styles.container}> {/* Mueve la clase styles.container aquí */}
            {favorito.length ? (
                favorito.map((d) => {
                    return (
                        <div className={styles.containerInfo} key={d.id}> {/* Agrega key para evitar advertencia */}
                            <p>{d.id}</p>
                            <Link to={`/dog/${d.id}`}><p>{d.name}</p></Link>
                            <Link to={`/dog/${d.id}`}><img className={styles.imgFavorite} src={d.image.url} alt="" /></Link>
                            <button onClick={()=>borrarFavorite(d.id)} className={styles.buttonFavorite} >Delete</button>
                        </div>
                    )
                })
            ) : (
                    <div>
                        <h1>nothing to show 🤔</h1> {/* Corrige el mensaje */}
                    </div>
                )}
        </div>
    )
}

export default Favorites
