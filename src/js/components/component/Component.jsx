define(['React'],
    function (React) {
        'use strict';

        return React.createClass({
            displayName: 'SimpleComponent',

            render: function () {
                return (
                    <div>
                      <h2>Simple component</h2>
                    </div>
                );
            }
        });
    }
);
