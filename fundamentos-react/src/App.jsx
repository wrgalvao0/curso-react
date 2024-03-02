import { Post } from "./Post"
import './global.css'
import styles from "./App.module.css"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
export function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/> 
        <main>
          <Post author = "WARLEY GALVAO" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime deleniti rem ipsum optio natus neque fuga. Harum quisquam aut eaque possimus molestiae. Quo non porro nihil laudantium nobis, officiis recusandae." />
          <Post author = "WADERSON GALVAO" content="Um conteúdo muito legal" />
        </main>
      </div>
    </div>
  )
}
