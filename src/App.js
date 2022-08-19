import './App.css';
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';
import Recommand from './Component/Recommand';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Searchpage from './Component/Searchpage';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/'>
          <div className="App">
            <div className="app_page">
              <Sidebar />
              <Recommand />

            </div>

          </div>
        </Route>
        <Route exact path='/Search/:searchterm'>
          <div className="App">
            <div className="app_page">
              <Sidebar />
              <Searchpage />


            </div>

          </div>
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
