/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var RouteActions = require('../actions/RouteActions');

var Link = React.createClass({
  propTypes: {
    to: React.PropTypes.string.isRequired
  },
  render: function () {
    this.props.href =
      this.props.to && this.props.to.lastIndexOf('/', 0) === 0 ?
      this.props.to : '/' + this.props.to;

    return (
      <a {...this.props} onClick={this._handleClick}>{this.props.children}</a>
    );
  },
  _handleClick: function (e) {
    e.preventDefault();
    RouteActions.setRoute(this.props.to);
  }
});

module.exports = Link;
