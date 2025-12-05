import Article from "../Article/Article"
import Aside from "../Aside/Aside"
import styles from './MainPage.module.css'

function MainPage() {

    return (
      <>
       <main className={styles.main}>
        <Article/>
        <Aside/>
       </main>
      </>
    )
  }
  
  export default MainPage