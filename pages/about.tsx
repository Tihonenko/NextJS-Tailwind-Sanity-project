import Image from 'next/image';

const About = ()=>{
    return(
        <div className='page_about'>
            <div className="about">
                <div className="head">О НАС</div>
                <div className="text">
                    <div>Международное модельное агенство , ориентированное на поиск, развитие
                        и плэйсмент молодых начинающих моделей в лучшие модельные агенства Европы,
                        Америки и Азии.
                    </div>
                    <div>Сотрудничая с Modelpublic, ты доверяешь свою карьеру профессионалам,
                         с опытом работы более 14 лет.
                    </div>
                </div>
            </div>
            <div className="photo">
                <Image src='/images/about.png'
                alt='photo'
                className='w-full '
                width={1360}
                height={510}
                />
            </div>
            <div className="work">
                <div className="item">
                    <Image src='/images/svg/search.svg'
                    alt='search'
                    width={24}
                    height={24}
                    />
                    <p>Международный скаутинг.Поиск новых лиц</p>
                </div>
                <div className="item">
                <Image src='/images/svg/photo.svg'
                    alt='photo'
                    width={30}
                    height={30}
                    />
                    <p>Развитие начинающих моделей (организация первых 
                       фотосъемок и составление модельного бука)
                    </p>
                </div>
                <div className="item"><Image src='/images/svg/list.svg'
                    alt='list'
                    width={24}
                    height={24}
                    />
                    <p>Поиск контрактов, организация командировок моделей
                       в международные модельные агентства
                    </p>
                </div>
                <div className="item">
                <Image src='/images/svg/star.svg'
                    alt='star'
                    width={28}
                    height={26}
                    />
                    <p>Полное сопровождение в организацтонных вопросах,
                       касающихся виз и подготовки документов к поездке
                    </p>
                </div>
                <div className="item">
                <Image src='/images/svg/plane.svg'
                    alt='plane'
                    width={28}
                    height={24}
                    />
                    <p>Составление индивидуального плана развития модельной
                       карьеры в целях создания быстрой занятости начинающей модели
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About