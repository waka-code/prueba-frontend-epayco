import { Item } from '../../../domain/entities/Item';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import TextArea from '../atoms/TextArea';
import { FieldErrors, FieldValues, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';

interface FormProps {
 onSubmit: (data: Item | any) => void
 handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
 register: UseFormRegister<FieldValues>
 type: "submit" | "reset" | "button" | undefined;
 errors: FieldErrors<FieldValues>
}

export const Form: React.FC<FormProps> = ({ errors, onSubmit, handleSubmit, register, type }) => {

 return (
  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
   <Input
    placeholder="Enter your title" register={register} />
   <TextArea
    placeholder="Enter your message"
    register={register}
   />
   {errors.root?.message && <p className='text-red-500'>{errors.root?.message}</p>}
   {typeof errors.body?.message === 'string' && <p className='text-red-500'>{errors.body.message}</p>}
   {typeof errors.title?.message === 'string' && <p className='text-red-500'>{errors.title.message}</p>}
   <Button label="Submit" type={type} color='bg-black' />
  </form>
 );
};
