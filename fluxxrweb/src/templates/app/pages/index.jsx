"use strict";

var React = require("react");
var DefaultLayout = require("./../layout/DefaultLayout.jsx");

var IndexPage = React.createClass({
    getDefaultProps: function () {
        return {
            title: 'Home',
            layout: DefaultLayout
        };
    },
    render: function () {
        return (
            <div className="container">
                Index Page
            </div>
        );
    }
});

module.exports = IndexPage;