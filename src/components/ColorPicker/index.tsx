import React, { ChangeEvent } from 'react'

interface ColorPickerProps {
   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
   value: string;
}

function ColorPicker({ onChange, value, ...rest }: ColorPickerProps & React.HTMLAttributes<HTMLInputElement>): JSX.Element {
   return (
      <input
         type="color"
         onChange={onChange}
         value={value}
      />
   )
}

export default ColorPicker;
