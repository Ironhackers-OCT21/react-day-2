import {useState} from 'react'

function ClickablePicture(props) {

    const [clicked, setClicked] = useState(false)

    function handleClick(){
        setClicked(!clicked)
    }

    let path = clicked ? props.imgClicked : props.img
    return (
        <div>
           <img onClick={handleClick} src={path} /> 
        </div>
    )
}


export default ClickablePicture