"use client";
import { Label,TextInput } from "keep-react";

type Props = {
    htmlFor: string
    label: string
    placeholder: string
    className: string
}

const InputText = ({htmlFor, label, placeholder, className} : Props) => {
  return (
    <div className={className}>
      <Label htmlFor={htmlFor} value={label} />
      <TextInput
        id={htmlFor}
        placeholder={placeholder}
        color="gray"
      />
    </div>
  );
}

export default InputText