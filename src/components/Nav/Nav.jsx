import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../Nav/Nav.module.css"
import perro from "../../img/perro.png"

const Nav= () => {
  return (
    <div className={styles.container}>
        <div>
            <img className={styles.logo} src={perro} alt="" />
        </div>
        <div>
            <nav>
                <ul className={styles.ul}>
                    <Link to={"/"}><li>Home</li></Link>
                    <Link to={"/favorites"}><li>Favorites</li></Link>
                    
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Nav
