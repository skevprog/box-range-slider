import { useState, ChangeEvent } from 'react'

import RangeSlider from './components/RangeSlider';

import './App.css'
import ColorPicker from './components/ColorPicker';

const INITIAL_STATE = {
  height: 400 / 2,
  width: 400 / 2,
  color: '#4682b4',
}

function App() {
  const [height, setHeight] = useState<number>(INITIAL_STATE.height);
  const [width, setWidth] = useState<number>(INITIAL_STATE.width);
  const [color, setColor] = useState<string>(INITIAL_STATE.color);

  const handleOnWidthChange = (event: ChangeEvent<HTMLInputElement>) => {
    setWidth(parseInt(event.target.value));
  };

  const handleOnHeightChange = (event: ChangeEvent<HTMLInputElement>) => {
    setHeight(parseInt(event.target.value));
  };

  const handleOnColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  }

  return (
    <div className="container">

      <RangeSlider
        label={`Width ${width}px`}
        id="widthRange"
        max={800}
        min={1}
        step={1}
        value={width}
        onChange={handleOnWidthChange}
      />

      <RangeSlider
        label={`Height ${height}px`}
        id="heightRange"
        max={400}
        min={1}
        step={1}
        value={height}
        onChange={handleOnHeightChange}
      />

      <ColorPicker id="color-picker" label="Box BackgroundColor" onChange={handleOnColorChange} value={color} />

      <div className="box" style={{ width, height, backgroundColor: color }} />
    </div>
  )
}

export default App
