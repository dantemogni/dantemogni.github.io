import * as React from "react"
import Grade from "grade-js"
import { StaticImage } from "gatsby-plugin-image"

const projectsOverview = ({pageTitle}) => {
    return (
        <section>
            <h3 style={{color: 'var(--textLink)'}}>{pageTitle}</h3>
            <div className="row justify-content-center align-items-center">
                <div className="col col-12 col-sm-6 col-md-3">
                    <StaticImage src="../images/only-god-forgives.jpg" width={150} />
                </div>
                <div className="col col-12 col-sm-6 col-md-3">
                    <StaticImage src="../images/only-god-forgives.jpg" width={150} />
                </div>                    
                <div className="col col-12 col-sm-6 col-md-3">
                    <StaticImage src="../images/only-god-forgives.jpg" width={150} />
                </div>
                <div className="col col-12 col-sm-6 col-md-3">
                    <StaticImage src="../images/only-god-forgives.jpg" width={150} />
                </div>                    
                <div className="col col-12 col-sm-6 col-md-3">
                    <StaticImage src="../images/only-god-forgives.jpg" width={150} />
                </div> 
               <div className="col col-12 col-sm-6 col-md-3">
                    <StaticImage src="../images/only-god-forgives.jpg" width={150} />
                </div>                    
                <div className="col col-12 col-sm-6 col-md-3">
                    <StaticImage src="../images/only-god-forgives.jpg" width={150} />
                </div>
            </div>
        </section>
    )
}
window.addEventListener('load', function(){
    Grade(document.querySelectorAll('.gradient-wrap'))
})

export default projectsOverview