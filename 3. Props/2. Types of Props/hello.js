class Hello extends React.Component {
    render() {
        const props = this.props;
        let bangs = "!".repeat(props.bangs)
        return (
            <div>
                <p>HELLOO {props.to} FROM {props.from}{bangs}</p>
                <p>{props.data}</p>
                <p>{props.nums}</p>
                <img src={props.img}/>
            </div>
        )
        // return (
        //     <h1>HELLOO {this.props.to} FROM {this.props.from}</h1>
        // )
    }
}
