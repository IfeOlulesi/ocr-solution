import { Button, CircularProgress } from '@mui/material';
import { useState, useRef } from 'react';
import Tesseract from 'tesseract.js';
import './styles/App.css';

const App = () => {
  const [imagePath, setImagePath] = useState("")
  const [text, setText] = useState("")
  const [loader,setLoader] = useState(false);

  const handleChange = (event) => {
    setImagePath(URL.createObjectURL(event.target.files[0]))
  }

  const buttonStyle = {textTransform:'capitalize', background:'#00612b', '&:hover':{background:'#00612b',}}

  const handleClick = () => {
    setLoader(true)
    Tesseract.recognize(
      imagePath, 'eng',
      {
        logger: m => console.log(m)
      }
    )
      .catch(err => {
        console.error(err);
      })
      .then(result => {
        console.log("Done", result)
        setLoader(false)
        // Get Confidence score
        let confidence = result.confidence

        let text = result.data.text
        setText(text);
      
      })
  }

  return (
    <div className="app-container">
      <p className="app-title"> Welcome to Tesseract </p>
      <div className='app-content-container' >
        <div className='app-input-container'>
          <h3>Actual image uploaded</h3>
          <div>
            <img src={imagePath} className='uploaded-img' width={400} height={400} style={{objectFit:'contain'}}/>
          </div>
          <div>
            <input type="file" onChange={handleChange} />
            <Button disableElevation sx={buttonStyle} className='convertToTextButton' variant="contained" onClick={handleClick} style={{ height: 50 }}> {loader?(<>converting...<CircularProgress sx={{color:'white'}} size={20}/></>):"convert to text"}</Button>
          </div>
        </div>
        <div className='app-output-container'>
          <div className='app-output-header-text'><h3>Extracted Text</h3></div>
          <div className='text-box'>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
