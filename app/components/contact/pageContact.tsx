import React from 'react'
import styles from './contact.module.scss'
import Image from 'next/image'

const PageContact = () => {
  return (
    <section className={styles.contact}>
        <div className={styles.mainimg}>
            <Image
                src='/images/contact.png'
                alt='foto'
                width={1000}
                height={2000}
                className={styles.img}
            />
        </div>
        <div className={styles.main}>
            <div>
                <h1 className={styles.h}>КОНТАКТЫ</h1>
                <p className={styles.text}>Все встречи с новыми моделями мы проводим в формате зума.
                    После звонка мы можем пригласить вас на просмотр и пробные снепы, которые мы проводим
                    в центральных фотостудиях, либо co-working пространствах Москвы.
                </p>
            </div>
            <div className={styles.write}>HАПИСАТЬ НАМ</div>
            <div className={styles.boxmail}>
                <p className={styles.mail}>CHERIEMODELS@GMAIL.COM</p>
                <div className={styles.img}>
                <Image
                    src='/images/contact.png'
                    alt='foto'
                    width={100}
                    height={200}
                />
                </div>
            </div>
        </div>
    </section>
  )
}

export default PageContact