import { timeLog } from "console";
import { useEffect, useState } from "react";
import { Countdown } from "../components/Countdown";
import { ContainerCountdown,ContainerContent } from '../styles/homeStyle'

let countdownTimeout: NodeJS.Timeout;

export default function Home() {
  const [time,setTime] = useState(25*60);
  const[isActive,setIsActive] = useState(false);
  
  useEffect(()=>{
   if(isActive){
     startCountDown();
    }
  },[time]
  )
function startCountDown(){
  countdownTimeout = setTimeout(
    () => setTime(time - 1),
    1000
  )
}
  function handleButtonClick(){

  if(isActive){
    console.log('is')
    clearTimeout(countdownTimeout)
    setIsActive(false);
    setTime(25*60)
  }else {
    setIsActive(true)
    startCountDown()
  }

  }

  return (
    <>
      <ContainerCountdown>
        <Countdown time={time} isActive={isActive} handleClick={handleButtonClick}/>
      </ContainerCountdown>
    </>
  )
}
