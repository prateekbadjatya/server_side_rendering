const React = require('react');

const Hello = () => {
    return React.createElement(
        'div',
        null,
        React.createElement('h1', null, 'Hello world!'),
        React.createElement('button', { id: 'myButton', onClick: () => console.log('button clicked') }, 'Click me')
    );
};

module.exports = Hello;