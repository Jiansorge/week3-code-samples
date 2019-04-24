import React from 'react';
import PropTypes from 'prop-types';

// class TodoItem extends React.Component {
//     static propTypes = {
//         todo: PropTypes.string
//     }

//     render() {
//         return <li>{this.props.todo}</li>;
//     }
// }

function TodoItem(props) {
    return <li>{props.todo}</li>;
}

TodoItem.propTypes = {
    todo: PropTypes.string
}
