import {useState} from 'react'

function Like() {
    // useState() returns us an array with two elements
    // the first is the element we want to use in our component that rerenders when updated
    // the second is a function that updates that element
    
    let [count, setCount] = useState(0)

    function handleClick(event){
        // console.log('Clicked', event)

        //updates the count
        setCount(count+1)
        console.log('Count is ', count)
        
    }

    let colors = ['purple','blue','green','yellow','orange','red']
    let randomColor = colors[Math.floor(Math.random()* colors.length)]
    
    return (
        <button style={ {backgroundColor: randomColor} } onClick={handleClick}>
            Like {count}
        </button>
    )
}

export default Like