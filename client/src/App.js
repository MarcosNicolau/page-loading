import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchResult from './components/searh-result';
import Nav from './components/nav';
import './styles/index.scss';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path={'/products'} component={SearchResult} />
      </Switch>
    </Router>
  );
}

export default App;
