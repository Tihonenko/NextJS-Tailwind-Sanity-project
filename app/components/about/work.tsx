import { Work } from "./Work.data"
import Work_item from "./work-item/Workitem"

const Work_about=()=>{
    return(
        <>
        <div className='text-[2vw] py-10'>
                Наша работа это 
        </div>
        <div className='h-[1px] bg-slate-300'></div>
        <div className="flex justify-between h-[13vw] mt-10">
        
        {Work.map((item) => (
						<Work_item item={item} key={item.link} />
					))}
            </div>
            </>
    )
}

export default Work_about