import React, {ChangeEvent} from 'react'

interface ColorPickerProps {
   label?: string;
   id: string;
   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
   value: string;
}

function ColorPicker({ label, id, onChange, value }: ColorPickerProps): JSX.Element {
   return (
      <div className="color-picker-container">
         {label && <label htmlFor={id}>{label}</label>}
         <input
            type="color"
            onChange={onChange}
            id={id} value={value}
         />
      </div>
   )
}

export default ColorPicker;
