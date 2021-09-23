import { useState } from 'react';
import {Container, Button} from './styles';

interface CountdownProps {
  time: number;
  isActive: boolean;
  handleClick: ()=> void;
}
export function Countdown({ time, isActive, handleClick}:CountdownProps){
  
  const minutes = Math.floor((time/60));
  const seconds = time % 60;

  const[minutesLeft,minutesRight] = `0${minutes}`.slice(-2).split('')
  const [secondsLeft, secondsRight] = `0${seconds}`.slice(-2).split('')
  return(
    <>
      <Container>
        <div>
          <span>{minutesLeft}</span>
          <span>{minutesRight}</span>
        </div>

        <span>:</span>

        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>

      </Container>  
      {
        !isActive &&
        <Button active={isActive} onClick={handleClick}>Start</Button>
      }
      {
        isActive &&
        <Button active={isActive} onClick={handleClick}>Stop</Button>
      }
    </>
  )
}