import Section from "./Section/Section"
import styles from './Article.module.css'

function Article() {

    return (
      <>
       <article className={styles.article}>
        <Section/>
        <Section/>
        <Section/>
       </article>
      </>
    )
  }
  
  export default Article