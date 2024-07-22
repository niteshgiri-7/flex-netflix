import Header from './Header';
import IfNotUser from '../utils/useIfNotUser';
const Browse = () => {
  IfNotUser();//redirects to login Page
  return (
    <div>
      <Header/>

    </div>
  )
}

export default Browse;
