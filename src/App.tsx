import { useState, ChangeEvent } from 'react'
import './App.css'

function App() {
  const [height, setHeight] = useState<number>(400 / 2);
  const [width, setWidth] = useState<number>(800 / 2);

  const handleOnWidthChange = (event: ChangeEvent<HTMLInputElement>) => {
    setWidth(parseInt(event.target.value));
  };

  const handleOnHeightChange = (event: ChangeEvent<HTMLInputElement>) => {
    setHeight(parseInt(event.target.value));
  };


  return (
    <div className="container">
      <div className="input-container">
        <label className="label" htmlFor="widthRange">Width {width}px</label>
        <input
          id="widthRange"
          type="range"
          max={800}
          min={1}
          step={1}
          value={width}
          onChange={handleOnWidthChange}
        />
      </div>

      <div className="input-container">
        <label className="label" htmlFor="heightRange">Height {height}px</label>
        <input
          id="heightRange"
          type="range"
          max={400}
          min={1}
          step={1}
          value={height}
          onChange={handleOnHeightChange}
        />
      </div>

      <div className="box" style={{ width, height }} />
    </div>
  )
}

export default App
