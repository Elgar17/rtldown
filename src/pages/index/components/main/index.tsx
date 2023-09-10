// import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './index.less'
import SimpleBar from 'simplebar-react'
import { MilkdownEditorWrapper } from '../editor'

interface Props {
  node?: any
}

const Main: React.FC<Props> = ({ node }) => {
  const onChange = (text: string) => {
    console.log(text)
  }
  return (
    <SimpleBar autoHide={false} color="" className="main-content">
      <MilkdownEditorWrapper onChange={onChange} node={node}/>
    </SimpleBar>
  )
}

export default Main
