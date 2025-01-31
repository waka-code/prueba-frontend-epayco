import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
 placeholder?: string;
 className?: string;
 register: UseFormRegister<FieldValues>
}

const Input: React.FC<InputProps> = ({ placeholder, className, register }) => {
 return (
  <input
   {...register("title", {
    required: "El título es obligatorio",
    minLength: { value: 5, message: "Mínimo 3 caracteres" },
    maxLength: { value: 50, message: "Máximo 50 caracteres" },
   })}
   type="text"
   placeholder={placeholder}
   className={`border border-gray-300 bg-transparent h-10 max-h-12 w-full outline-none max-w-full p-4 rounded-lg ${className}`}
   required
  />
 );
};

export default Input;
