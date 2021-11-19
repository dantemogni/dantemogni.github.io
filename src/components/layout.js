import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import * as styles from "./layout.module.css"
import { StaticImage } from "gatsby-plugin-image"
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import "../css/bootstrap-grid.css"

const Layout = ({ pageTitle, children }) => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                title
                }
            }
        }
    `)
    return (
        <div className='container'>
            <section className={`row align-items-center ${styles.headerContainer}`}>
                <div className="col-sm-auto">
                    <StaticImage
                        src="../images/sloth.png" alt="Sloth Emoji" 
                        width={70}
                        placeholder="blurred"    
                    />
                </div>
                    
                <div className="col col-12 col-sm-9 col-md-7">
                    <header className={`bold ${styles.siteTitle}`}>{data.site.siteMetadata.title}</header>
                    <nav className={`row  no-decoration`}>
                        <ul className={`col ${styles.navLinks}`}>
                            <li><Link to ="/" activeClassName={styles.navLinkTextActive}>Home</Link></li>
                            <li><Link to="/blog/" activeClassName={styles.navLinkTextActive}>Blog</Link></li>
                            <li><Link to="/projects/" activeClassName={styles.navLinkTextActive}>Projects</Link></li>
                            <li><Link to="/cv/" activeClassName={styles.navLinkTextActive}>CV</Link></li>
                        </ul>
                    </nav>
                </div>

                <div className="col-sm-auto align-self-start">                    
                    <title>{pageTitle} | {data.site.siteMetadata.title}</title>
                    <ThemeToggler>
                    {({ theme, toggleTheme }) => (
                        <label className={`italic ${styles.themeToggler}`}>
                            <input
                            type="checkbox"
                            onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                            checked={theme === 'dark'}
                            />{' '}
                            Dark mode
                        </label>
                    )}
                    </ThemeToggler>
                </div>
            </section>
            <div className="row">
                <main className="col col-12 col-sm-10 col-md-9"> 
                    <h3 className={styles.heading}>{pageTitle}</h3>
                    {children}
                </main> 
            </div>
        </div>
    )
}

export default Layout