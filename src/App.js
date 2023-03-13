import { useState, useRef } from 'react';
import Tesseract from 'tesseract.js';
import './styles/App.css';

const App = () => {
  const [imagePath, setImagePath] = useState("")
  const [text, setText] = useState("")

  const handleChange = (event) => {
    setImagePath(URL.createObjectURL(event.target.files[0]))
  }

  const handleClick = () => {
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
            <img src={imagePath} className='uploaded-img' />
          </div>
          <div>
            <input type="file" onChange={handleChange} />
            <button onClick={handleClick} style={{ height: 50 }}> convert to text</button>
          </div>
        </div>
        <div className='app-output-container'>
          <h3>Extracted Text</h3>
          <div className='text-box'>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
