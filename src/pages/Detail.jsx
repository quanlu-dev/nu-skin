import { useLocation } from 'react-router-dom'

import Header from '../components/Header'
import Footer from '../components/Footer'

function Detail() {
    const location = useLocation()
  return (
    <>
      <Header cartCount={0} />

      <div className="container py-5">
        <textarea
          className="form-control"
          rows="10"
          value={location.state || ''}
          readOnly
        />
      </div>

      <Footer />
    </>
  )
}

export default Detail