import styles from './faq.module.scss'
import Post from './post'
import { Postdata } from '../../data/faq.data'

const Posts = () => {
  return (
    <div className={styles.posts}>
        {Postdata.map((post) => (
						<Post post={post} key={post.id} />
					))}
    </div>
  )
}

export default Posts