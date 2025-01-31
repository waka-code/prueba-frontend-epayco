interface ButtonProps {
 onClick?: () => void;
 label: string;
 className?: string;
 type: "submit" | "reset" | "button" | undefined;
 disabled?: boolean;
 color?: string;
 textColor?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label, textColor = "text-white", className, type, disabled, color }) => {
 return (
  <button
  onClick={onClick}
  type={type}
  disabled={disabled}
  className={`${color} ${textColor} w-24 max-w-50 outline-none h-9 max-h-10 rounded cursor-pointer ${className} shadow-lg transition-transform focus:scale-105 active:scale-95`}
>
  {label}
</button>
 );
};

export default Button;
  