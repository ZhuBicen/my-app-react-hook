import React from 'react';
import PropTypes from "prop-types"

export default class TokenForm extends React.Component {
    static propTypes = {
        setToken: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = { value: '' }
    }

    handleSubmit = event => {
        event.preventDefault();
        const { setToken } = this.props;
        const token = this.state.value;
        if (token) {
            setToken(token);
        }
    }
    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                <input type="text" value={this.state.value}></input>
            </form>
        )
    }
}