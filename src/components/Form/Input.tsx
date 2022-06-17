import { forwardRef } from "react";
import { ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";
import style from './styles.module.scss';

interface InputProps {
    name: string;
    label?: string;
    error?: FieldError;
};

export const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, error = null, ...rest }: InputProps, ref) => {
    return (
        <div className={style.container}>
            {!!label && <label htmlFor={name}>{label}</label>}
            <input
                name={name}
                id={name}
                ref={ref}
                {...rest}
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