import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from "../Search/SearchCard.module.css"
import{addFavorite} from "../../redux/actions/actions"
import { Link } from 'react-router-dom'
import image from "../../img/notfound.png"

const SearchCard = () => {
    const dogs = useSelector((state)=>state.search)
    const dogss = useSelector((state)=>state.dogs)
    const dispatch = useDispatch()

    function handleFavorite(id){
        const valor = dogss.find((d)=>d.id==id)
        dispatch(addFavorite(valor))
    }
    return (
        <div className={styles.container}>
            {dogs.length?
            dogs.map((d)=>{
                return(
                   <div>
                     <p>{d.id}</p>
                    <Link to={`/pokemon/${d.id}`}><p>{d.name}</p></Link>
                    <Link to={`/pokemon/${d.id}`}><img className={styles.img} src={d.image.url} alt="" /></Link>
                     <button className={styles.button} onClick={(id)=>handleFavorite(d.id)}>Add to favorites</button>
                   </div>
                )
            }):(
                      <div className={styles.notContainer}>
                     <h1 className={styles.hunoTitle}>not found</h1>
                     </div>
                
            )}
        </div>
      )
}

export default SearchCard