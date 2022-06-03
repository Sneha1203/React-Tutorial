class Hello extends React.Component {
    static defaultProps = {
        from: 'Anon',
        bangs: 1,
        img: "https://c.tenor.com/jlSuJXXJTZ4AAAAC/kermit-frog.gif"
    }
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
    }
}
