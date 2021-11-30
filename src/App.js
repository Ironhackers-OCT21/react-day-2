import logo from './logo.svg';
import './App.css';
import Like from './components/Like';
import Dislike from './components/Dislike';
import ClickablePicture from './components/ClickablePicture'
import Dice from './components/Dice';
import Humans from './components/Humans';

function App() {
  return (
    <div>
      <Humans />
      {/* <Dice /> */}
      {/* <ClickablePicture
        img='https://github.com/ironhack-labs/lab-react-training/blob/master/src/assets/images/maxence.png?raw=true'
        imgClicked='https://github.com/ironhack-labs/lab-react-training/blob/master/src/assets/images/maxence-glasses.png?raw=true'
      />
      <Like initialValue={41} />
      <Dislike /> */}

    </div>
  );
}

export default App;

