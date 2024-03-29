import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import cx from 'classnames';
import './transition.css';

class App extends Component {
  state = {
    showBalloon: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      showBalloon: !prevState.showBalloon,
    }));
  };

  render() {
    return (
      <div className="container">
        <button
          className={cx('toggler', {
            'toggler--active': this.state.showBalloon,
          })}
          onClick={this.toggle}
        >
          Dropdown
        </button>
        <CSSTransition
          in={this.state.showBalloon}
          timeout={350}
          classNames="balloon"
          unmountOnExit
        >
          <div className="menu">
            <ul className="list">
              <li className="list-item">Home</li>
              <li className="list-item">1. Profile</li>
              <li className="list-item">2. Favorites</li>
              <li className="list-item">3. Sign out</li>
            </ul>
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default App;
