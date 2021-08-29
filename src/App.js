import logo from './logo.svg';
import './App.css';
import Home from 'containers/client/Home/Home';
import Theater from 'containers/client/Theather/Theater';
import About from 'containers/client/About/About';
import Review from 'containers/client/Review/Review';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Header from 'components/Header/Header';
import MovieDetail from 'containers/client/MovieDetail/MovieDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/theater" component={Theater} />
          <Route path="/review" component={Review} />
          <Route path="/movieDetail/:movieId" component={MovieDetail}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
