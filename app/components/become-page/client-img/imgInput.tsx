import { FC } from 'react'
import Image from 'next/image'

import styles from '../become.module.scss'

const ImgInput: FC = () => {
  return (
    <label className={styles.img_input}>
     <Image
     src='/images/svg/plus.svg'
     alt='plus'
     width={30}
     height={30}
     className={styles.img}
     />
    <input type='file' className='hidden' ></input>
    </label>
  )
}

export default ImgInput

