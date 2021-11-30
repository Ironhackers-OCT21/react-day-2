
import {useState} from 'react'

let dice1 = 'https://raw.githubusercontent.com/ironhack-labs/lab-react-training/master/src/assets/images/dice1.png'
let dice2 = 'https://raw.githubusercontent.com/ironhack-labs/lab-react-training/master/src/assets/images/dice2.png'
let dice3 = 'https://raw.githubusercontent.com/ironhack-labs/lab-react-training/master/src/assets/images/dice3.png'

let diceEmpty = 'https://raw.githubusercontent.com/ironhack-labs/lab-react-training/master/src/assets/images/dice-empty.png'



function Dice() {

    let arrayDice = [dice1, dice2, dice3]

    let randomDice = arrayDice[Math.floor(Math.random() * arrayDice.length)]

    let [path, setPath] = useState(randomDice)

    function handleClick(){
        setPath(diceEmpty)
        setTimeout(() => {
            setPath(arrayDice[Math.floor(Math.random() * arrayDice.length)])
        }, 1000)
    }

    return (
        <div>
            <img onClick={handleClick} src={path} />
        </div>
    )
}

export default Dice