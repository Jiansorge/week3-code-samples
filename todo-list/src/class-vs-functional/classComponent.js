import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
    static propTypes = {
        todo: PropTypes.string
    }

    render() {
        return <li>{this.props.todo}</li>;
    }
}
