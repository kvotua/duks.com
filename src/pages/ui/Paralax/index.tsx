import {FC, useEffect} from 'react';
import styles from "./styles.module.scss";

const Paralax: FC = () => {

    const handleMouseMove = (event: MouseEvent) => {
        const layers = document.querySelectorAll<HTMLImageElement>('[class*="paralax"]');
        layers.forEach((layer, index) => {
            switch (index){
                case 1:
                    index *= 0;
                    break;
                case 2:
                    index *= 0.5;
                    break;
                case 3:
                    index *= 0.5;
                    break;
            }
            const depth = index * 0.9;
            const movementX = (event.clientX - window.innerWidth / 2) * (depth / 100);
            const movementY = (event.clientY - window.innerHeight / 4) * (depth / 100);
            layer.style.transform = `translate(${movementX}px, ${movementY}px)`;
        });
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return(
        <div className={styles.paralax_container}>
            <img className={styles.paralax} src="/src/assets/paralax/1.png"/>
            <img className={styles.paralax + " " + styles.layer} src="/src/assets/paralax/2.png"/>
            <img className={styles.paralax} src="/src/assets/paralax/4.png"/>
            <img className={styles.paralax} src="/src/assets/paralax/3.png"/>
            <img className={styles.paralax + " " + styles.layer} src="/src/assets/paralax/5.png"/>
        </div>
    );
};

export default Paralax;
