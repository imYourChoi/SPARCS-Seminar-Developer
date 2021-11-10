import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Counter from './components/Counter';
import DogFetch from './components/DogFetch';
import DogsByBreed from './components/DogsByBreed';
import DogSNS from './components/DogSNS';
import HelloComponent from './components/HelloComponent';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <h1>Main</h1>
        </Route>
        <Route exact path='/dog-fetch'>
          <DogFetch />
        </Route>
        <Route exact path='/dog-sns'>
          <DogSNS />
        </Route>
        <Route exact path='/dog-breed'>
          <DogsByBreed />
        </Route>
        <Route exact path='/counter'>
          <Counter />
        </Route>
        <Route exact path='/hello'>
          <HelloComponent message = 'Hello SPARCS'/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
