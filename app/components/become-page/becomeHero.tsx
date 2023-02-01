import { FC } from 'react'

import styles from './become.module.scss'

const HeroBecome:FC = () => {
  return (
    <section className={styles.marquee_box}>
      <h1 className={styles.marquee}>
        BECOME A MODEL BECOME A MODEL
      </h1>
    </section>
  )
}

export default HeroBecome