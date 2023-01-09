import './styles.css';

interface LabelProps {
   id: string;
   label: string;
   customStyles?: string[];
}

function Label({ id, label, customStyles = [], ...rest }: LabelProps & React.HTMLAttributes<HTMLLabelElement>): JSX.Element {
  return (
   <label className={["label", ...customStyles].join('')} htmlFor={id} {...rest}>{label}</label>
  )
}

export default Label;
