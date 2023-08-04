import Sidebar from '@/components/sidbar'
import Main from '@/components/main'
import './index.less'

const index = () => {
  return (
    <div className="index-continer">
      <Main />
      <Sidebar />
    </div>
  )
}

export default index
