import React, { useEffect } from 'react'
import { detail, addFavorite} from '../../redux/actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styles from "../Detail/Detail.module.css"
import swal from 'sweetalert'

const Detail = () => {
    const dog = useSelector((state) => state.details)
    const dispatch = useDispatch()
    const { id } = useParams()
    const dogs = useSelector((state=>state.dogs))
    function handleFavorite(id){
        const valor = dogs.find((d=> d.id == id))
        swal("added to favorites");
        dispatch(addFavorite(valor))
    }

    useEffect(() => {
      dispatch(detail(id))
    }, [])

    return (
        <div className={styles.container}>
            {dog.length ? (
                <div className={styles.containerInfo}>
                    <div className='imagen-container'>
                        <img className={styles.imgDetail}  src={`https://cdn2.thedogapi.com/images/${dog[0].reference_image_id}.jpg`} alt="" />
                    </div>
                    <div>
                        <p>peso: <span>{dog[0].weight.metric}</span> Kg</p>
                        <p>altura: <span>{dog[0].height.metric}</span>cm</p>
                        <p>Grupo de raza: <span>{dog[0].breed_group}</span></p>
                        <p>Tiempo de Vida: <span>{dog[0].life_span}</span></p>
                        <p>Origen: <span>{dog[0].origin}</span></p>
                        <p>Criado Para <span>{dog[0].bred_for}</span></p>
                    </div>
                      <button onClick={(id)=>handleFavorite(dog[0].id)} className={styles.detailFavorite}>Add to Favorites</button>
                    <div>   
                    </div>
                </div>
            ) : (
                <h1>Not found</h1>
            )}
        </div>
    )
}

export default Detail;
