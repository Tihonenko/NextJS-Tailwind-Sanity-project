import styles from './faq.module.scss'
import Post from './post/post'
import { Postdata } from './faq.data'

const Posts = () => {
  return (
    <section className={styles.posts}>
        {Postdata.map((post) => (
						<Post post={post} key={post.id} />
					))}
    </section>
  )
}

export default Posts