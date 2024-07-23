import React, { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '../utils/cn';
import { useId } from 'react';
interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    placeholder?: string;
    type?: string;
    error?: string
}

const TextField: React.ForwardRefRenderFunction<HTMLInputElement, TextFieldProps> =
    ({ className, placeholder, type = 'text', error, ...props }, ref) => {
        return (
            <div>
                <input
                    ref={ref}
                    className={cn(`w-full outline-none border-b  border-black py-2 placeholder:text-base ${className}`)}
                    placeholder={placeholder}
                    type={type}
                    {...props}
                    autoComplete='off'
                    id={useId()}
                /> <> {error && <p className="text-red-500 mt-2 text-sm leading-none">{error}</p>}</></div>
        );
    }

export default forwardRef(TextField);
