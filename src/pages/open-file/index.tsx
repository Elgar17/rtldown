import { Link } from 'react-router-dom'
import './index.less'

const Open = () => {
  return (
    <div>
      <div className="open">Open New File</div>
      <Link to="/">go to home</Link>
    </div>
  )
}

export default Open
