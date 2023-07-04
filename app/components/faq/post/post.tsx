import {FC} from 'react'
import {IPostCont} from './faq.interface'
import styles from '../faq.module.scss'

interface Ipost{
    post:IPostCont;
}



const Post:FC<Ipost> = ({post}) => {
  return (
    <div className={styles.post} onClick={(e)=>{

      let text = document.getElementById('text' + post.id)
      let plus = document.getElementById('plus' + post.id)

      if(text?.style.display == 'block'){
        text.style.display = 'none'
        plus.style.transform = 'rotate(90deg)'
      } else{
        text.style.display = 'block'
        plus.style.transform = 'rotate(0)'
      }

    }}>
        <div className={styles.headpost}>
            <h2 className={styles.h}>{post.name}</h2>
            <div className={styles.plus}>
                <div className={styles.div1}></div>
                <div id={'plus' + post.id} className={styles.div2}></div>
            </div>
        </div>
        <div id={'text' + post.id} className={styles.textpost}>{post.text}</div>
    </div>
  )
}

export default Post