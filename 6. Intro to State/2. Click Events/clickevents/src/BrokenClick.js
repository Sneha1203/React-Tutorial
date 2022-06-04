import React, {Component} from 'react';

class BrokenClick extends Component {
    constructor(props) {
        super(props);
        this.state = {clicked: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState({clicked: true});
    }

    render() {
        return (
            <div>
                <h1>{this.state.clicked ? 'CLICKED!!!' : 'NOT CLICKED!!!'}</h1>
                <button onClick={this.handleClick}>CLICK ME!!</button>
            </div>
        );
    }
}

export default BrokenClick;