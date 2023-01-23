import { FC } from 'react';
import Image from 'next/image';
import { IWorkCont } from './work-cont.interface';
import styles from '../about.module.scss'

interface IWorkItem {
	item: IWorkCont;
}

const Work_item:FC<IWorkItem> = ({item}) =>{
    return(
        <div className={styles.item}>
                    <Image src={item.link}
                    alt={item.name}
                    width={item.iconw}
                    height={item.iconh}
                    />
                    <p className={styles.text}>{item.text}</p>
                </div>
    )
}
export default Work_item