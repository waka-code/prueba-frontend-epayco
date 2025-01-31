import { FieldValues, UseFormRegister } from "react-hook-form";

interface TextAreaProps {
 placeholder?: string;
 className?: string;
 register: UseFormRegister<FieldValues>
}

const TextArea: React.FC<TextAreaProps> = ({ register, placeholder, className }) => {
 return (
  <textarea
   {...register("body", {
    required: "El cuerpo es obligatorio",
    minLength: { value: 10, message: "Mínimo 10 caracteres" },
   })}
   placeholder={placeholder}
   className={`border border-gray-300 bg-transparent w-full max-w-full outline-none p-4 h-26 max-h-30 rounded ${className}`}
   required
  />
 );
};

export default TextArea;
