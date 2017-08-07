'use strict';

module.exports = React => {
    const $ = React.createElement;
    return genForm => {
        /* eslint no-unused-vars: 1 */

        return config => {

            return class AllOf extends React.Component {

                constructor (props) {
                    super(props);
                }

                shouldComponentUpdate (nextProps) {
                    if (this.props.data === nextProps.data) {
                        return false;
                    }
                    return true;
                }

                render () {
                    // const data = this.props.data;
                    return $('div', {}, 'allOf');
                }
            };
        };
    };
};