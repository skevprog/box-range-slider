import React, { ReactNode } from "react";
import Label from "../Label";

import './styles.css';

interface ControlProps {
   children: ReactNode,
   id?: string;
   label?: string;
   customStyles?: string[];
}

function Control({ children, id = '', label = '', customStyles = [], ...rest }: ControlProps & React.HTMLAttributes<HTMLDivElement>): JSX.Element {
   return (
      <div className={["control-container", ...customStyles].join('')} {...rest}>
         {label && <Label id={id} label={label} />}
         {children}
      </div>
   )
}

export default Control;
