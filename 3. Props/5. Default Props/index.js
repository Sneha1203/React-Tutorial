class App extends React.Component {
    render() {
        return (
            <Hello 
                to="Sneha"
                data={2}
                nums={[1, 2]}
            />
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))