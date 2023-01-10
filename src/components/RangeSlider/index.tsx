import React, { ChangeEvent } from 'react'

interface RangeSliderProps {
   max: number;
   min: number;
   step: number;
   value: number;
   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function RangeSlider({
   max,
   min,
   step,
   value,
   onChange,
   ...inputRestProps
}: RangeSliderProps & React.HTMLAttributes<HTMLInputElement>): JSX.Element {
   return (<>
      <input
         type="range"
         max={max}
         min={min}
         step={step}
         value={value}
         onChange={onChange}
         className="slider"
         {...inputRestProps}
      />
   </>)
}

export default RangeSlider;
