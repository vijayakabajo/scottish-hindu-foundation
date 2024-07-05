import { Link } from "react-router-dom";
import styles from "./Join.module.css"
import React from 'react';
const Join = () => {
    return (
        <div className={styles.bgContainer}>
            <div className={`grid  grid-cols-1 md:grid-cols-2 mt-10 ${styles.mainContainer}`}>

                <div className={styles.textContainer}>
                    <div>
                        <h1 className={styles.heading} >Come Join our team </h1>
                        <img className={styles.teamDesign} src="/Images/work-with-us/Group 3524.png" alt="" />
                        <p className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
                        <Link to="/workwithus2"><button className={styles.viewBtn}>View</button></Link>

                    </div>
                </div>

                <div className={styles.imageContainer}>
                    <img className={styles.image} src="/Images/work-with-us/Group 3508.png" alt="image" />
                    <img className={styles.topImg} src="/Images/work-with-us/Group 3525.png" alt="image" />

                    <img className={styles.houseImg1} src="/Images/work-with-us/Ellipse 382.png" alt="image" />
                    <img className={styles.houseImg2} src="/Images/work-with-us/Ellipse 383.png" alt="image" />

                    <img className={styles.bottomImg} src="/Images/work-with-us/Group 3523.png" alt="image" />

                </div>


            </div>
        </div>

    )
}

export default Join;