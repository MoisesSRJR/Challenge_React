import styled, { css } from 'styled-components';
import colors from '../../styles/colors';

type ButtonProps = {
    isLoading?: boolean;
    marginLeft?: string;
    marginTop?: string;
    notResizable?: boolean;
    width?: string;
};

export const Container = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    text-transform: uppercase;
    gap: 12px;
    padding: ${(props) => (props.isLoading ? '8px' : '10px 16px')};
    width: ${(props) => (props.width ? props.width : '86px')};
    min-height: 40px;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    text-align: center;
    margin-left: ${(props) => props.marginLeft && props.marginLeft};
    margin-top: ${(props) => props.marginTop && props.marginTop};
    cursor: pointer;    

    .label {
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    text-align: center;
    }

    &[type='submit'] {
        background-color: ${colors.blue};
        border: none;
        color: #fff;
    }

    &[type='submit']:disabled {
        background-color: ${colors.blue};
        cursor: default;
    }

    &[type='submit']:hover:enabled {
        background-color:${colors.blue200};
    }

    &[type='submit']:active:enabled {
        background-color: ${colors.blue};
    }

    &[type='submit']:focus {
        background-color:  ${colors.blue};
        outline: 0;
    }
    ${(props) =>
        !props.notResizable &&
        css`
            @media (max-width: 768px) {
                margin: 0;
                width: 100%;
            }
        `}
`;
