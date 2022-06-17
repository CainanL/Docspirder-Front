import { forwardRef } from "react";
import { ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";
import style from './styles.module.scss';

interface InputProps {
    name: string;
    label?: string;
    error?: FieldError;
    type?: string;
    value?: any;
    setValue?: (value: any) => void;
};

export const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({
    name,
    label,
    error = null,
    type = 'text',
    setValue,
    ...rest
}: InputProps, ref) => {
    return (
        <div className={style.container}>
            {!!label && <label htmlFor={name}>{label}</label>}
            <input
                name={name}
                id={name}
                ref={ref}
                {...rest}
                type={type}
            />

            {
                !!error && (
                    <p>{error.message}</p>
                )
            }

        </div>
    )
};

export const Input = forwardRef(InputBase);