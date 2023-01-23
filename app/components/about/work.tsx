import { Work } from "./Work.data"
import Work_item from "./work-item/Workitem"
import styles from './about.module.scss'


const Work_about=()=>{
    return(
        <div className={styles.work}>
        <div className={styles.h}>
                Наша работа это 
        </div>
        <div className={styles.line}></div>
        <div className={styles.box}>
        
        {Work.map((item) => (
						<Work_item item={item} key={item.link} />
					))}
            </div>
            </div>
    )
}

export default Work_about