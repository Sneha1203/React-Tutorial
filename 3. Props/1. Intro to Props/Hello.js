class Hello extends React.Component {
    render() {
        const props = this.props;
        return <p>HELLOO {props.to} FROM {props.from}</p>

        // return (
        //     <h1>HELLOO {this.props.to} FROM {this.props.from}</h1>
        // )
    }
}
