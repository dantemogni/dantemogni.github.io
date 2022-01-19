import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const projectsOverview = ({pageTitle}) => {
    return (
        <section>
            <h3 style={{color: 'var(--textLink)'}}>{pageTitle}</h3>
            <div className="row justify-content-center align-items-center">
                <div className="col col-12 col-sm-6 col-md-4">
                    <a href="https://todoapp-dante.herokuapp.com/" target={"_blank"}>
                        <StaticImage src="../images/todoapp.jpg" placeholder="blurred" />
                    </a> 
                </div>
                <div className="col col-12 col-sm-6 col-md-4">
                    <a href="https://pomodoro-dante.netlify.app/" target={"_blank"}>
                        <StaticImage src="../images/pomodoro.jpg" placeholder="blurred"/>
                    </a>
                </div>
                <div className="col col-12 col-sm-6 col-md-4">
                    <a href="https://estudiomogni.com.ar/" target={"_blank"}>
                        <StaticImage src="../images/promo-web.jpg" placeholder="blurred" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default projectsOverview