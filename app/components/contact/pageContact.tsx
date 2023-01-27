import React from 'react'
import styles from './contact.module.scss'
import Image from 'next/image'

const PageContact = () => {
  return (
    <div className={styles.contact}>
        <div className={styles.mainfoto}>
            <Image
                src='/images/contact.png'
                alt='foto'
                width={100}
                height={200}
                className={styles.img}
            />
        </div>
        <div className={styles.main}>
            <div>
                <div className={styles.h}>КОНТАКТЫ</div>
                <div className={styles.text}>Все встречи с новыми моделями мы проводим в формате зума.
                    После звонка мы можем пригласить вас на просмотр и пробные снепы, которые мы проводим
                    в центральных фотостудиях, либо co-working пространствах Москвы.
                </div>
            </div>
            <div className={styles.write}>HАПИСАТЬ НАМ</div>
            <div className={styles.boxmail}>
                <div className={styles.mail}>CHERIEMODELS@GMAIL.COM</div>
                <div className={styles.foto}>
                <Image
                    src='/images/contact.png'
                    alt='foto'
                    width={100}
                    height={200}
                    className={styles.img}
                />
                </div>
            </div>
        </div>
    </div>
  )
}

export default PageContact