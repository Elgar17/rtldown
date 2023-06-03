import { Link } from 'react-router-dom'
import Sidebar from '@/components/sidbar'
import Main from '@/components/main'
import './index.less'

const index = () => {
  return (
    <div className="index-continer">
      <Main>
        <Link to="/open">open</Link>
      </Main>
      <Sidebar></Sidebar>
    </div>
  )
}

export default index
