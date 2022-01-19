import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./projectsPostList.module.css"

const projectsPostList = ({pageTitle}) => {
    return (    
        <section>
            <div className="row g-20 justify-content-center align-items-center">
                <div className={`col col-12 ${styles.itemProject}`}>
                    <div className={styles.projectDetails}>
                        <div className={`itemTitle ${styles.itemTitle}`}>
                            <ul className={styles.tagList}>
                                <li className={`italic ${styles.tagPost}`}>Java</li>
                                <li className={`italic ${styles.tagPost}`}>Spring Boot</li>
                                <li className={`italic ${styles.tagPost}`}>PostgreSQL</li>
                                <li className={`italic ${styles.tagPost}`}>fullstack</li>
                                <li className={`italic ${styles.tagPost}`}>Bootstrap</li>
                            </ul>

                            <h3># TODO webapp</h3>
                            <p className={styles.caption}>
                                Free online ToDo utility built using Spring Boot Framework.
                            </p>
                            <br/>
                            <a href="https://todoapp-dante.herokuapp.com/" rel="noreferrer"  target={"_blank"}>Go to site</a>
                        </div>
                        <div className={styles.itemImage}>
                            <StaticImage src="../images/todoapp.jpg" width={250} placeholder="blurred" />
                        </div>
                    </div>
                </div>
                <div className={`col col-12 ${styles.itemProject}`}>
                    <div className={styles.projectDetails}>
                        <div className={`itemTitle ${styles.itemTitle}`}>
                            <ul className={styles.tagList}>
                                <li className={`italic ${styles.tagPost}`}>Vue.js</li>
                                <li className={`italic ${styles.tagPost}`}>Frontend</li>
                                <li className={`italic ${styles.tagPost}`}>Javascript</li>
                            </ul>
                            <h3># Pomodoro</h3>
                            <p className={styles.caption}>
                                Simple yet useful Pomodoro web app. 
                            </p>
                            <br/>
                            <a href="https://pomodoro-dante.netlify.app/" rel="noreferrer"  target={"_blank"}>Go to site</a>
                        </div>
                        <div className={styles.itemImage}>
                            <StaticImage src="../images/pomodoro.jpg" width={250} placeholder="blurred"/>
                        </div>
                    </div>
                </div>
                <div className={`col col-12  ${styles.itemProject}`}>
                    <div className={styles.projectDetails}>
                        <div className={`itemTitle ${styles.itemTitle}`}>
                            <ul className={styles.tagList}>
                                <li className={`italic ${styles.tagPost}`}>Landing Page</li>
                                <li className={`italic ${styles.tagPost}`}>HTML</li>
                            </ul>

                            <h3># Estudio Mogni</h3>
                            <p className={styles.caption}>
                                Landing Page for 'Estudio Mogni' 
                            </p>
                            <br/>
                            <a href="https://estudiomogni.com.ar/" rel="noreferrer" target={"_blank"}>Go to site</a>
                        </div>
                        <div className={styles.itemImage}>
                            <StaticImage src="../images/promo-web.jpg" width={250} placeholder="blurred" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default projectsPostList