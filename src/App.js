/* eslint-disable import/no-duplicates */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-expressions */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

import MainPage from './Pages/MainPage';

import SingleShelterOnListComponent from './Components/SingleShelterOnList/SingleShelterOnListComponent';
import SheltersListComponent from './Components/SheltersListComponent/SheltersListComponent';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

import './styles.css';
import SingleDogPopUp from './Components/SingleDogPopUp/SingleDogPopUp';

const SheltersPage = ({ match }) => {
  return (
    <div className="shelters--container">
      <h1>SheltersPage</h1>
      <div className="shelters--side-bar">
        <ul>
          <li>
            <Link to={`${match.url}`}>All</Link>
          </li>
          <li>
            <Link to={`${match.url}/lodz`}>Łódź</Link>
          </li>
          <li>
            <Link to={`${match.url}/jelenia-gora`}>Jelenia Góra</Link>
          </li>
        </ul>
      </div>
      <Route exact path={match.path} render={() => <SheltersListComponent />} />
      <Route path={`${match.path}/:name`} component={SingleShelterOnListComponent} />
    </div>
  );
};

// eslint-disable-next-line react/prefer-stateless-function
class DogsPage extends React.Component {
  state = {
    isPopUpOpen: false,
  };

  openPopUp = () => {
    this.setState(() => {
      return { isPopUpOpen: true };
    });
  };

  handelOnDogIconClick = () => {
    this.openPopUp();
  };

  render() {
    return (
      <div>
        <h1>DogsPage</h1>
        <button type="button" onClick={this.handelOnDogIconClick}>
          Dog 1
        </button>
        <button type="button" onClick={this.handelOnDogIconClick}>
          Dog 2
        </button>
        <button
          type="button"
          onClick={this.handelOnDogIconClick}
          onKeyPress={this.handelOnDogIconClick}
        >
          {' '}
          Dog 3
        </button>
        <SingleDogPopUp isUp={this.state.isPopUpOpen} />
      </div>
    );
  }
}

const AboutPage = () => {
  return (
    <div>
      <h1>AboutPage</h1>
      <SingleDogPopUp />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/dogs" component={DogsPage} />
        <Route path="/shelters" component={SheltersPage} />
        <Route path="/about" component={AboutPage} />
      </Switch>

      <Footer />
    </Router>
  );
};

export default App;
