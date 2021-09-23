import styled, { css } from 'styled-components';

type CountdownButtonProps ={
  active: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;

  > div{
    display: flex;
    flex: 1;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;

    font-family: Rajdhani;
    font-size: 8.5rem;
    
    border-radius: 5px;
    background-color: var(--gray-200);

    span{
      flex:1;
      align-content: center;

      &:first-child{
        border-right: 1px solid var(--white);
      }
      &:last-child {
        border-left: 1px solid var(--white);
      }
    }
  }
  > span{
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }`

export const Button = styled.button`
  ${({ theme }) => css<CountdownButtonProps>`

    width: 100%;
    height: 5rem;
    margin-top: 2rem;

    font-size: 1.25rem;
    font-weight: 600;
    color: var(--white);

    border:none;
    border-radius: 5px;
    background-color: var(--blue-200);
    
    ${(props)=>
      props.active &&
      css`
        background-color:  var(--red);
      `}
    `}

`