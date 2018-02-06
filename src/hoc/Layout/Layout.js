import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navbar from './../../components/Navigation/Navbar/Navbar';
import './Layout.css';

class Layout extends Component {

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className="content container-fluid">
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