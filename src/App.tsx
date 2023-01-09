import { useState, ChangeEvent } from 'react'

import RangeSlider from './components/RangeSlider';
import ColorPicker from './components/ColorPicker';
import Control from './components/common/Control';

import './App.css'

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

      <Control
        id="widthRange"
        label={`Width ${width}px`}
      >
        <RangeSlider
          max={800}
          min={1}
          step={1}
          value={width}
          onChange={handleOnWidthChange}
        />
      </Control>

      <Control
        id="heightRange"
        label={`Height ${height}px`}
      >
        <RangeSlider
          max={400}
          min={1}
          step={1}
          value={height}
          onChange={handleOnHeightChange}
        />
      </Control>

      <Control
        id="heightRange"
        label="Box Color"
      >
        <ColorPicker onChange={handleOnColorChange} value={color} />
      </Control>

      <div className="box" style={{ width, height, backgroundColor: color }} />
    </div>
  )
}

export default App
