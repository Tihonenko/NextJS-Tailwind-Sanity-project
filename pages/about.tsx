import Image from 'next/image';

const About = ()=>{
    return(
        <div className='m-5'>
            <div className='flex justify-between'>
                <div className='text-[4vw] font-semibold w-1/3'>О НАС</div>
                <div className="flex justify-end w-1/2">
                    <div className='w-[27vw] text-[1vw]'>Международное модельное агенство , ориентированное на поиск, развитие
                        и плэйсмент молодых начинающих моделей в лучшие модельные агенства Европы,
                        Америки и Азии.
                    </div>
                    <div className='w-[25vw]  ml-5 text-[1vw]'>Сотрудничая с Modelpublic, ты доверяешь свою карьеру профессионалам,
                         с опытом работы более 14 лет.
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <Image src='/images/about.png'
                alt='photo'
                className='w-full '
                width={1360}
                height={510}
                />
            </div>
            <div className='text-[2vw] py-10'>
                Наша работа это 
            </div>
            <div className='h-[1px] bg-slate-300'></div>
            <div className="flex justify-between h-[13vw] mt-10">
                <div className="flex-col flex  items-center w-1/6 text-[1vw]">
                    <Image src='/images/svg/search.svg'
                    alt='search'
                    width={24}
                    height={24}
                    />
                    <p className='mt-5 text-center'>Международный скаутинг.<br/>Поиск новых лиц</p>
                </div>
                <div className="flex-col flex  items-center w-1/6 text-[1vw]">
                <Image src='/images/svg/photo.svg'
                    alt='photo'
                    width={30}
                    height={30}
                    />
                    <p className='mt-5 text-center'>Развитие начинающих моделей (организация первых 
                       фотосъемок и составление модельного бука)
                    </p>
                </div>
                <div className="flex-col flex  items-center w-1/6 text-[1vw]">
                    <Image src='/images/svg/list.svg'
                    alt='list'
                    width={24}
                    height={24}
                    />
                    <p className='mt-5 text-center'>Поиск контрактов, организация командировок моделей
                       в международные модельные агентства
                    </p>
                </div>
                <div className="flex-col flex  items-center w-1/6 text-[1vw]">
                <Image src='/images/svg/star.svg'
                    alt='star'
                    width={28}
                    height={26}
                    />
                    <p className='mt-5 text-center'>Полное сопровождение в организацтонных вопросах,
                       касающихся виз и подготовки документов к поездке
                    </p>
                </div>
                <div className="flex-col flex  items-center w-1/6 text-[1vw]">
                <Image src='/images/svg/plane.svg'
                    alt='plane'
                    width={28}
                    height={24}
                    />
                    <p className='mt-5 text-center'>Составление индивидуального плана развития модельной
                       карьеры в целях создания быстрой занятости начинающей модели
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About