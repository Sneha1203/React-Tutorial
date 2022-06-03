class App extends React.Component {
    render() {
        return (
            <div>
                <Hello 
                    to="Ringo" 
                    from="Paul"
                    data={3}  // {} for numbers, " " for strings
                    nums={[1, 2, 3, 4, 5]}
                    bangs={6}
                    img="https://c.tenor.com/jlSuJXXJTZ4AAAAC/kermit-frog.gif"
                />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))