import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import * as styles from "./layout.module.css"
import { StaticImage } from "gatsby-plugin-image"
import { ThemeToggler } from "gatsby-plugin-dark-mode";

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
        <div className={styles.container}>
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
            <section className={styles.headerContainer}>
                <StaticImage
                    className={styles.navEmoji}
                    src="../images/sloth.png" alt="Sloth Emoji" 
                    width={70}
                    placeholder="blurred"    
                />
                <nav className={`no-decoration`}>
                    <header className={`bold ${styles.siteTitle}`}>{data.site.siteMetadata.title}</header>
                    <ul className={styles.navLinks}>
                        <li><Link to ="/" activeClassName={styles.navLinkTextActive}>Home</Link></li>
                        <li><Link to="/blog/" activeClassName={styles.navLinkTextActive}>Blog</Link></li>
                        <li><Link to="/projects/" activeClassName={styles.navLinkTextActive}>Projects</Link></li>
                        <li><Link to="/cv/" activeClassName={styles.navLinkTextActive}>CV</Link></li>
                    </ul>
                </nav>
            </section>
            <main>
                <h1 className={styles.heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout