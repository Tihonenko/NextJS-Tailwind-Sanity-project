import styles from './about.module.scss'

const Hero_about = () =>{
    return(
        <section className={styles.hero}>
        <div className={styles.h}>О НАС</div>
        <div className={styles.text}>
            <div className={styles.div1}>Международное модельное агенство , ориентированное на поиск, развитие
                и плэйсмент молодых начинающих моделей в лучшие модельные агенства Европы,
                Америки и Азии.
            </div>
            <div className={styles.div2}>Сотрудничая с Modelpublic, ты доверяешь свою карьеру профессионалам,
                 с опытом работы более 14 лет.
            </div>
        </div>
    </section>
    )
}

export default Hero_about