import {FC} from "react";
import styles from "./styles.module.scss"

const Comic:FC = () => {
    return(
        <div className={styles.comic_container}>
            <div className={styles.comic_row}>
                <img className={styles.comic} src="/src/assets/paralax/blok1.png"/> 
                <img className={styles.comic} src="/src/assets/paralax/blok2.png"/>
            </div>
            <div className={styles.comic_row}>
                <img className={styles.comic} src="/src/assets/paralax/blok3.png"/> 
                <img className={styles.comic} src="/src/assets/paralax/blok4.png"/>
            </div>
            <div className={styles.comic_row}>
                <img className={styles.comic} src="/src/assets/paralax/blok5.png"/> 
                <img className={styles.comic} src="/src/assets/paralax/blok6.png"/>
            </div>
        </div>
    );
};

export default Comic;