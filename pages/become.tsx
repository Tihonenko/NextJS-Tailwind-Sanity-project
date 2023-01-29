import Layout from '@components/layout/Layout';
import HeroBecome from "@components/become-page/becomeHero"
import Form from '@components/become-page/form';


const become = () => {
  return (
    <Layout title='Стать моделью'>
        <HeroBecome/>
        <Form/>
    </Layout>
  )
}

export default become