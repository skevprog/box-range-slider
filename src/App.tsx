import { useState, ChangeEvent } from 'react'

import RangeInput from './components/RangeInput';

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

      <RangeInput
        label={`Width ${width}px`}
        id="widthRange"
        max={800}
        min={1}
        step={1}
        value={width}
        onChange={handleOnWidthChange}
      />

      <RangeInput
        label={`Height ${height}px`}
        id="heightRange"
        max={400}
        min={1}
        step={1}
        value={height}
        onChange={handleOnHeightChange}
      />

      <div className="box" style={{ width, height }} />
    </div>
  )
}

export default App
