import React from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends React.Component {
    static propTypes = {
        todo: PropTypes.shape({
            value: PropTypes.string.isRequired,
            isComplete: PropTypes.bool.isRequired
        })
    }

    render() {
        let style = {};
        if (this.props.todo.isComplete) {
            style.textDecoration = 'line-through';
        }

        // const style = {
        //     textDecoration: this.props.todo.isComplete ? 'line-through' : 'none'
        // };

        // const style = {
        //     textDecoration: 'line-through'
        // }

        return (
            <li
                onClick={this.props.onClick}
                style={style}
            >
                {this.props.todo.value}
            </li>
        );
    }
}

// TodoItem.propTypes = {
//     todo: PropTypes.string
// }
