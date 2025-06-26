import error from '../../assets/error.png'
import Layout from '../../components/Layout/Layout'
const Error = () => {
  return (
    <Layout>

    <div className='flex justify-center container py-36'>
      <img 
      src={error} 
      alt="error" />
    </div>
    </Layout>
  )
}

export default Error