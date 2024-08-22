import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../Nav/Nav.module.css"
import perro from "../../img/perro.png"
import { useDispatch } from 'react-redux'
import { goToHome} from '../../redux/actions/actions'

const Nav= () => {
    const dispatch = useDispatch()
    function goHome(){
        dispatch(goToHome())
    }
  return (
    <div className={styles.container}>
        <div className={styles.homeDiv}>
            <img  className={styles.logo} src={perro} alt="" />
            <Link to={"/"}><button onClick={goHome} className={styles.buttonSearch}>HOME</button></Link>
        </div>
        <div>
            <nav>
                <ul className={styles.ul}>
                    <Link to={"/"}><li>Back</li></Link>
                    <Link to={"/favorites"}><li>Favorites</li></Link>
                    
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Nav
