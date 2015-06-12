/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var Link = require('../components/Link.jsx');
var Navbar = require('../components/Navbar.jsx');

var DefaultLayout = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    breadcrumb: React.PropTypes.component
  },
  getDefaultProps: function () {
    return {
      title: 'Fluxxr Web Application',
      description: 'Web application built with React.js and Flux'
    };
  },
  render: function () {
    var header = this.props.breadcrumb ? (
      <div className="container">
        <h2>{this.props.title}</h2>
        {this.props.breadcrumb}
      </div>
    ) : (
      <div className="jumbotron">
        <div className="container text-center">
          <h1>React</h1>
          <p>Complex web apps made easy</p>
        </div>
      </div>
    );

    return (
      <div>
        <Navbar />
        {header}
        {this.props.children}
        <div className="navbar-footer">
          <div className="container">
            <p className="text-muted">
              <span><Link to="/">Home</Link></span>
              <span><Link to="/about">About</Link></span>
            </p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = DefaultLayout;
