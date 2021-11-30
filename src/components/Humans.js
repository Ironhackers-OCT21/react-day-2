import { useState } from 'react'
import people from '../people.json'

function Humans() {
    
    //Creating a hook 
    const [allPeople, setPeople] = useState(people)
    //        |             |                 |
    // the name of d state  |                 |
    //                      |                 |
    //         the fn that updates the state  |
    //                                 setting the default value

    function handleDelete(id){
        let filteredHumans = allPeople.filter((elem) => {
            return elem.id !== id
        })
        // Updating the state 'allPeople' with the filtered list
        setPeople(filteredHumans)
    }

    function handleSort(){
        let clone = JSON.parse(JSON.stringify(allPeople))
        clone.sort((first, second) => {
            if (first.name > second.name) {
                return 1
            }
            else if (first.name < second.name) {
                return -1
            }
            else {
                return 0
            }
        })

        // Updating the state 'allPeople' with the sorted list
        setPeople(clone)

    }

    function handleAdd(){
        let randomElem = people[Math.floor(Math.random() * people.length)]
        let newArray = [randomElem, ...allPeople]
        setPeople(newArray)
    }


    console.log(allPeople.length)

    return (
        <div>
            <h1>List of humans</h1>
            <button onClick={handleSort}> Sort </button>
            <button onClick={handleAdd} > Add </button>
            <hr />
            {
                allPeople.map((elem, index) => {

                    return (
                        // set the key attribute for React to uniquely identify list items
                        <div key={`${elem.id}${index}`}>
                            {elem.name} 
                            { elem.house == 'Slytherin' && '🤩' }
                            {elem.house == 'Gryffindor' && '👹'}
                            {/* { elem.house == 'Slytherin' ? '🤩' : '' } */}
                            <button onClick={() => { handleDelete(elem.id) }}>Delete</button>


                            {/* DON'T DO THIS. IT WILL INVOKE THE FUNCTION RIGHT AWAY */}
                            {/* <button onClick={     handleDelete(elem.id)     }>Delete</button> */}


                            {/* HERE WE ARE JUST PASSING `handleDelete` AS A CALLBACK */}
                            {/* <button onClick={handleDelete}>Delete</button> */}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Humans