import { FC } from 'react';
import Image from 'next/image';
import { IWorkCont } from './work-cont.interface';
import styles from '../about.module.scss'

interface IWorkItem {
	item: IWorkCont;
}

const WorkItem:FC<IWorkItem> = ({item}) =>{
    return(
        <div className={styles.item}>
                    <Image src={item.link}
                    alt={item.name}
                    width={item.iconw}
                    height={item.iconh}
                    className={styles.image}
                    />
                    <p className={styles.text}>{item.text}</p>
                </div>
    )
}
export default WorkItem