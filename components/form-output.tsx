import React from 'react';
import { useFormContext } from 'react-hook-form';

type FormOutputProps = {
  label: string;
  name: string;
  type?: string;
};

const FormOutput: React.FC<FormOutputProps> = ({
  label,
  name,
  type = 'text',
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className=''>
      <label htmlFor={name} className='block text-ct-gray-600 mb-3'>
        {label}
      </label>
      <input
        type={type}
        placeholder=' '
        className='block w-full rounded-2xl appearance-none focus:outline-none py-2 px-4'
        {...register(name)}
      />
      {errors[name] && (
        <span className='text-gray-500 text-xs pt-1 block'>
          {errors[name]?.message as string}
        </span>
      )}
    </div>
  );
};

export default FormOutput;
