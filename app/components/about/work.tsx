import { Work } from "../../data/work.data"
import WorkItem from "./Workitem"
import styles from './about.module.scss'


const WorkAbout=()=>{
    return(
        <div className={styles.work}>
        <div className={styles.h}>
                Наша работа это 
        </div>
        <div className={styles.line}></div>
        <div className={styles.box}>
        
        {Work.map((item) => (
						<WorkItem item={item} key={item.link} />
					))}
            </div>
            </div>
    )
}

export default WorkAbout