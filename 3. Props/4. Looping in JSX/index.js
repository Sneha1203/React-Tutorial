class App extends React.Component {
    render() {
        return (
            <div>
                <Friend
                    name="Elton"
                    hobbies={['Piano', 'Singing', 'Dancing']}
                />
                <Friend
                    name="Elena"
                    hobbies={['Drawing', 'Painting']}
                />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))