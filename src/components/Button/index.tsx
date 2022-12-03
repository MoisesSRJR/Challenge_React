import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean;
    label: ReactNode;
    marginLeft?: string;
    marginTop?: string;
    notResizable?: boolean;
    icon?: ReactNode;
    width?: string;
    item?: number;
}

export function Button({ isLoading, label, marginLeft, marginTop, notResizable, width, item, icon, ...props }: ButtonProps): JSX.Element {
    return (
        <Container isLoading={isLoading} marginLeft={marginLeft} marginTop={marginTop} notResizable={notResizable} width={width} {...props}>
            {icon } {item} <span className='label'>{label}</span>
        </Container>
    );
}

Button.defaultProps = {
    isLoading: false,
    marginLeft: undefined,
    marginTop: undefined,
    notResizable: false,
    width: undefined,
    item: undefined,
    icon: undefined,
};
