/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var Link = require('./Link.jsx');

var Navbar = React.createClass({
  render: function () {
    return (
      <div className="navbar-top">
        <div className="container">
          <Link className="navbar-brand row" to="/">
            <span>Fluxxr Web Application</span>
          </Link>
        </div>
      </div>
    );
  }
});

module.exports = Navbar;
