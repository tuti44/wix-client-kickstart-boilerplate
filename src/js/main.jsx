requirejs.config({
    paths: {
        lodash: '../vendor/lodash',
        React: '../vendor/react-with-addons',
        ReactDOM: '../vendor/react-dom',
        ReactRouter: 'https://cdnjs.cloudflare.com/ajax/libs/react-router/2.0.0/ReactRouter'
    },
    map: {
        '*': {
            react: 'React'
        }
    },
    shim: {
        lodash: {
            exports: '_'
        },
        React: {
            exports: 'React'
        }
    }
});

requirejs(['lodash', 'React', 'ReactDOM', 'components/MainView'],
    function (_, React, ReactDOM, MainView) {
        'use strict';
        var mountPoint = document.getElementById('app');
        ReactDOM.render(<MainView />, mountPoint);
    }
);
