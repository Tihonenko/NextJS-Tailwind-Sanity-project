import { FC } from 'react';
import Image from 'next/image';
import { IWorkCont } from './work-cont.interface';

interface IWorkItem {
	item: IWorkCont;
}
const Work_item:FC<IWorkItem> = ({item}) =>{
    return(
        <div className="flex-col flex  items-center w-1/6 text-[1vw]">
                    <Image src={item.link}
                    alt={item.name}
                    width={item.iconw}
                    height={item.iconh}
                    />
                    <p className='mt-5 text-center'>{item.text}</p>
                </div>
    )
}
export default Work_item