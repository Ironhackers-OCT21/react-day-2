import React, { Component } from 'react'

class Dislike extends Component {
    // state is a keyword. It needs to be an object
    state = {
        count: 0,
        age: 21, 
        name: 'Manish'
    }

    handleClick = () => {
        //console.log('this in ES6 ', this)

        //asynchronous event
        // takes two parameters
        // 1. the state object and the property to be updated in the state
        // 2. (OPTIONAL) A callback that is invoked when the stat is updated
        this.setState({
            count: this.state.count - 1
        }, () => {
            // if you ever need to do something with the updated value of the state
            console.log(this.state.count)
        })
        
    }

    render() {
        console.log('Dislike render')

        return (
            <button onClick={this.handleClick}>
                Dislike {this.state.count}
            </button>
        )
    }
}

export default Dislike