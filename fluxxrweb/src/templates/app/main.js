"use strict";

var React = require('react');
var objectAssign = Object.assign || require('object-assign');
var Router = require('director').Router;
var AppDispatcher = require('./AppDispatcher');
var ActionTypes = require('./constants/ActionTypes');

// Export React so the dev tools can find it
(window !== window.top ? window.top : window).React = React;

/**
 * Check if Page component has a layout property; and if yes, wrap the page
 * into the specified layout, then mount to document.body.
 */
function render(page) {
    var child, props = {};
    while (page.defaultProps.layout) {
        child = page(props, child);
        objectAssign(props, page.defaultProps);
        page = page.defaultProps.layout;
    }
    React.renderComponent(page(props, child), document.body);
    document.title = props.title;
}

// Define URL routes
// See https://github.com/flatiron/director
var routes = {
    '/': function () { render(require('./pages/Index.jsx'))},
    '/about': function () { render(require('./pages/About.jsx'))}
};

// Initialize a router
var router = new Router(routes).configure({html5history: true}).init();

AppDispatcher.register(function (payload) {

    var action = payload.action;

    if (action.actionType === ActionTypes.SET_CURRENT_ROUTE) {
        router.setRoute(action.route);
    }

    return true; // No errors.  Needed by promise in Dispatcher.
});