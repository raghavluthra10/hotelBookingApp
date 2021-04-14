import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import SearchPage from './SearchPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/searchPage' component={SearchPage} />
          <Home  />
          <SearchPage  />
        </Switch>
        <Footer  />
      </Router>
    </div>
  );
}

export default App;
// 39:00:00