import { InputHTMLAttributes } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { Container, InputText } from './styles'


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    register: UseFormRegister<FieldValues>;
    errors: {
        [x: string]: any;
    };
}

const Input = ({ name, errors, label, register, ...rest }: InputProps) => {
    return (
        <Container>
            {
                label && <label htmlFor={name}>{label}</label>
            }
            <InputText {...rest} { ...register(name)} isErrored={!!errors[name]} />
            <span className='erro'>{errors[name]?.message}</span>
        </Container>
    )
}


export default Input;