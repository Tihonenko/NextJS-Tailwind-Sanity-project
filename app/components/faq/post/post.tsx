import {FC} from 'react'
import {IPostCont} from './post.interface'
import styles from '../faq.module.scss'

interface Ipost{
    post:IPostCont;
}

const Post:FC<Ipost> = ({post}) => {
  return (
    <div className={styles.post}>
        <div className={styles.headpost}>
            <div className={styles.h}>{post.name}</div>
            <div className={styles.plus}>
                <div className={styles.div1}></div>
                <div className={styles.div2}></div>
            </div>
        </div>
        <div className={styles.textpost}>{post.text}</div>
    </div>
  )
}

export default Post