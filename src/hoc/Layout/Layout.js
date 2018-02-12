import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TopNavbar from './../../components/Navigation/TopNavbar/TopNavbar';
import './Layout.css';

class Layout extends Component {

  render() {
    return (
      <React.Fragment>
        <TopNavbar />
        <main className="content container-fluid pt-3">
          {this.props.children}
        </main>
      </React.Fragment>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.any
};

export default Layout;