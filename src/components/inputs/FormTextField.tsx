import React, { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '../utils/cn';
import { useId } from 'react';

 interface FormTextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    placeholder?: string;
    type?: string;
    title: string;
    error?: string
}

const FormTextField: React.ForwardRefRenderFunction<HTMLInputElement, FormTextFieldProps> =
    ({ className, placeholder, title, type = 'text', error, ...props }, ref) => {
        return (
            <div className=' border border-[#ADADAD] relative z-0 h-12 rounded-[4px] font-[Nunito]'>
                <input
                    ref={ref}
                    className={cn(`w-full bg-transparent px-4 outline-none h-12 placeholder:text-base ${className}`)}
                    placeholder={placeholder}
                    type={type}
                    {...props}
                    autoComplete='off'
                    id={useId()}
                />
                <span className='absolute left-1 text-primary-200 -top-2 font-medium bg-white text-sm z-10 pr-0.5 leading-none'>{title}</span>
                <div> {error && <p className="text-red-500 mt-1 text-sm leading-none">{error}</p>}</div>
            </div>
        );
    }

export default forwardRef(FormTextField);
