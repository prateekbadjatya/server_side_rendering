const React = require('react');

const Hello = () => {
    return React.createElement(
        'div',
        null,
        React.createElement('h1', null, 'Hello world!')
    );
};

module.exports = Hello;