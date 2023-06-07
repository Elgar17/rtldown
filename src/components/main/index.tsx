// import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './index.less'
import { MilkdownEditorWrapper } from '../editor'

const Main = () => {
  return (
    <div className="main-content">
      <MilkdownEditorWrapper />
      {/* <Router>
        <Switch>
          <Route path="/mine/" component={login} exact></Route>
          <Route path="/mine/login" component={login}></Route>
        </Switch>
      </Router> */}
    </div>
  )
}

export default Main
