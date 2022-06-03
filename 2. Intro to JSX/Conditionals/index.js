function getNum() {
    return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
    render() {
        const num = getNum();
        let msg;

        if(num === 7) {
            msg = 
                <div>
                    <h2>CONGRATS!!</h2>
                    <img src="https://c.tenor.com/jlSuJXXJTZ4AAAAC/kermit-frog.gif" />
                </div>
        } else {
            msg = <p>UNLUCKY!!</p>
        }

        return (
            <div>
                <h1>Your number is: {num}</h1>
                {msg}
            </div>
        );
        // return (
        //     <div>
        //         <h1>Your number is {num}</h1>
        //         <p>{num === 7 ? 'Congrats!!' : 'Unlucky number!!'}</p>
        //         {
        //             num === 7 && 
        //             <img src="https://c.tenor.com/jlSuJXXJTZ4AAAAC/kermit-frog.gif" />
        //         }
        //     </div>
        // )
    }
}

ReactDOM.render(<NumPicker/>, document.getElementById('root'))