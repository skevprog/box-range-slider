import { ChangeEvent } from 'react'

import './styles.css';

interface RangeInputProps {
   max: number;
   min: number;
   step: number;
   value: number;
   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
   label?: string;
   id: string;
}

function RangeInput({ max, min, step, value, onChange, id, label, ...inputRestProps }: RangeInputProps): JSX.Element {
   return (
      <div className="slider-container">
         {label && <label className="label" htmlFor={id}>{label}</label>}
         <input
            id={id}
            type="range"
            max={max}
            min={min}
            step={step}
            value={value}
            onChange={onChange}
            {...inputRestProps}
         />
      </div>)
}

export default RangeInput;
