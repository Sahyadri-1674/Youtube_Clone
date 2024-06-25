import React,{useState} from 'react'
import styles from './Home.module.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'

function Home({sidebar}) {
    const [category,setCategory] = useState(0);

  return (
    <>
     <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}/> 
     <div className={`${styles.container} ${sidebar ? "": styles['large-container']}`}>
        <Feed category={category}/>
     </div>
    </>
  )
}

export default Home
