import Image from 'next/image';

const Photo_about = () =>{
    return(
        <>
        <div className="mt-10">
                <Image src='/images/about.png'
                alt='photo'
                className='w-full '
                width={1360}
                height={510}
                />
        </div>
        
        </>
    )
}

export default Photo_about