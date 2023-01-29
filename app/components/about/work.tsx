import { Work } from "./work.data"
import WorkItem from "./work-item/workItem"
import styles from './about.module.scss'


const WorkAbout=()=>{
    return(
        <section className={styles.work}>
        <h1 className={styles.h}>Наша работа это</h1>
        <div className={styles.line}></div>
        <div className={styles.box}>
        
        {Work.map((item) => (
						<WorkItem item={item} key={item.link} />
					))}
            </div>

        </section>
    )
}

export default WorkAbout