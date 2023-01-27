import HeroFAQ from "../app/components/faq/hero"
import Posts from "../app/components/faq/posts"


const faq = () => {
  return (
    <div className='container'>
        <HeroFAQ/>
        <Posts/>
    </div>
  )
}

export default faq