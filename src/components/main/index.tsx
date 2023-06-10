// import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './index.less'
import SimpleBar from 'simplebar-react'
import { MilkdownEditorWrapper } from '../editor'

const Main = () => {
  return (
    <SimpleBar autoHide={false} color="" className="main-content">
      <MilkdownEditorWrapper />
      {/* <Router>
        <Switch>
          <Route path="/mine/" component={login} exact></Route>
          <Route path="/mine/login" component={login}></Route>
        </Switch>
      </Router> */}
    </SimpleBar>
  )
}

export default Main
