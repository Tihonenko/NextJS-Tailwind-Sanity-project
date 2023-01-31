import Layout from '@components/layout/Layout';
import HeroBecome from "@components/become-page/becomeHero"
import Form from '@components/become-page/form';
import PAfterForm from '@components/become-page/pForm';

const become = () => {
  return (
    <Layout title='Стать моделью'>
        <HeroBecome/>
        <Form/>
        <PAfterForm/>
    </Layout>
  )
}

export default become