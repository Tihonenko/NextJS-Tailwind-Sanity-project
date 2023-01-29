import styles from './become.module.scss'
import Input from './input/Input'
import { Inputs } from './input.data'


const Form = () => {
  return (
    <section className={styles.form_section}>
        <form className={styles.form}>
            <fieldset name='requirements'>
                <legend>Требования</legend>
                <div>
                    <p>Рост: 173-182 </p>
                    <p>Возраст: 13 до 20</p>
                </div>
            </fieldset>
            <fieldset name='inputs'>
                {Inputs.map((input))=> (
                    <Input input={input} key={input.name}
                )}
            </fieldset>
        </form>
        <div className={styles.div_img}></div>
    </section>
  )
}

export default Form