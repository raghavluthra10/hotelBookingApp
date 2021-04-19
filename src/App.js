import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import SearchPage from './SearchPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchState from './contextSearch/SearchState';
import FullInfo from './FullInfo';
import DetailState from './contextDetail/DetailState';


function App() {
  return (
    <div className="App">
      <Router>
        <SearchState>
        <DetailState>
        <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/searchPage' component={SearchPage} />
            <Route exact path='/fullInfo' component={FullInfo} />
            <Home  />
            <SearchPage  />
          </Switch>
          <Footer  />
        </DetailState>
        </SearchState>
      </Router>
    </div>
  );
}

export default App;
// 39:00:00