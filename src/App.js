import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';

import HomePage from './pages/homePage';

function App() {
  return (
    <div>
      <Header />

      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
