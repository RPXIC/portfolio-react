import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Layout, Home, Projects, Contact } from './components'

const App = () => (
  <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Route />
        </Switch>
      </Layout>
  </Router>
)

export default App