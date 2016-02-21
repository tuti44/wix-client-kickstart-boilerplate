define(['lodash',
        'React',
        'components/component/component'
      ],

    function (_, React) {
        'use strict';

        return React.createClass({
            displayName: 'MainView',

            render: function () {
                return (
                    <div>
                      <h1>Hello H1</h1>
                    </div>
                );
            }
        });
    });
