"use strict";

var React = require("react");
var DefaultLayout = require("./../layout/DefaultLayout.jsx");

var AboutPage = React.createClass({
    getDefaultProps: function () {
        return {
            title: 'Home',
            layout: DefaultLayout
        };
    },
    render: function () {
        return (
            <div className="container">
                About Page
            </div>
        );
    }
});

module.exports = AboutPage;