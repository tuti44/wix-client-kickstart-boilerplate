requirejs.config({
    paths: {
        lodash: '../vendor/lodash',
        React: '../vendor/react-with-addons'
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

requirejs(['lodash', 'React', 'components/MainView'],
    function (_, React, MainView) {
        'use strict';
        var mountPoint = document.getElementById('app');
        window.scrum = React.render(<MainView />, mountPoint);
    }
);
