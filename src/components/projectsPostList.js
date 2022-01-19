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
                            <span className={`italic ${styles.tagPost}`}>Java</span>
                            <span className={`italic ${styles.tagPost}`}>Spring Boot</span>
                            <span className={`italic ${styles.tagPost}`}>PostgreSQL</span>
                            <span className={`italic ${styles.tagPost}`}>fullstack</span>
                            <span className={`italic ${styles.tagPost}`}>Bootstrap</span>

                            <h3># TODO webapp</h3>
                            <caption className={styles.caption}>
                                Free online ToDo utility built using Spring Boot Framework.
                            </caption>
                            <br/>
                            <a href="https://todoapp-dante.herokuapp.com/"  target={"_blank"}>Go to site</a>
                        </div>
                        <div className={styles.itemImage}>
                            <StaticImage src="../images/todoapp.jpg" width={250} placeholder="blurred" />
                        </div>
                    </div>
                </div>
                <div className={`col col-12 ${styles.itemProject}`}>
                    <div className={styles.projectDetails}>
                        <div className={`itemTitle ${styles.itemTitle}`}>
                            <span className={`italic ${styles.tagPost}`}>Vue.js</span>
                            <span className={`italic ${styles.tagPost}`}>Frontend</span>
                            <span className={`italic ${styles.tagPost}`}>Javascript</span>

                            <h3># Pomodoro</h3>
                            <caption className={styles.caption}>
                                Simple yet useful Pomodoro web app. 
                            </caption>
                            <br/>
                            <a href="https://pomodoro-dante.netlify.app/"  target={"_blank"}>Go to site</a>
                        </div>
                        <div className={styles.itemImage}>
                            <StaticImage src="../images/pomodoro.jpg" width={250} placeholder="blurred"/>
                        </div>
                    </div>
                </div>
                <div className={`col col-12  ${styles.itemProject}`}>
                    <div className={styles.projectDetails}>
                        <div className={`itemTitle ${styles.itemTitle}`}>
                            <span className={`italic ${styles.tagPost}`}>Landing Page</span>
                            <span className={`italic ${styles.tagPost}`}>HTML</span>

                            <h3># Estudio Mogni</h3>
                            <caption className={styles.caption}>
                                Landing Page for 'Estudio Mogni' 
                            </caption>
                            <br/>
                            <a href="https://estudiomogni.com.ar/" target={"_blank"}>Go to site</a>
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