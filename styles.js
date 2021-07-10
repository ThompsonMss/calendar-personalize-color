import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;    
    overflow-x: hidden;
    background: ${({ propsCalendar }) => propsCalendar.primaryColor};

    @media(min-width: 769px){
        width: 400px;
    }
`;

export const Actions = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;

    border-bottom: .5px solid ${({ propsCalendar }) => darken(0.7, propsCalendar.inversePrimaryColor)};

    button {
        padding: 0px;
        border: none;
        outline: none;
        background: transparent;
        height: 40px;
        width: 40px;
        cursor: pointer;

        display: flex;
        align-items: center;

        svg {
            height: 20px;
            width: 20px;

            color: ${({ propsCalendar }) => propsCalendar.inversePrimaryColor};
        }
    }

    div {
        span{
            font-size: 16px;
            font-weight: bold;

            color: ${({ propsCalendar }) => propsCalendar.inversePrimaryColor};
        }
    }
`;

export const ContainerDays = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: 10px;
    padding-bottom: 10px;

    background: ${({ propsCalendar }) => propsCalendar.primaryColor};
`;

export const ContentLabelsDays = styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;

    div {
        
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;

        @media(min-width: 769px){
            width: 55px;
        }

        span {

            font-size: 12px;
            font-weight: bold;
            text-transform: uppercase;

            color: #999;
        }
    }
`;

export const ColumnDay = styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

`;

export const ContentDays = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding-left: 10px;
    padding-right: 10px;
`;

export const WrapperDay = styled.div`

        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 35px;
        cursor: pointer;

        @media(min-width: 769px){
            width: 50px;
        }
`;

export const Check = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        width: 35px;
        height: 35px;
        position: relative;

        background: ${({ propsCalendar, check }) => check ? propsCalendar.secondaryColor : 'transparent'};

        span {

            font-size: 14px;
            text-transform: uppercase;

            color: ${({ colorOff, propsCalendar, disabled, check }) => disabled ? '#666' : colorOff ? '#666' : check ? propsCalendar.inverseSecondaryColor : propsCalendar.inversePrimaryColor};
        }
`;

export const Badge = styled.div`
    height: 4px;
    width: 4px;
    border-radius: 50px;
    background: ${props => props.color};
    position: absolute;
    bottom: 4px
`;