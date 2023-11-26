import { useState } from "react";



export  function useForm(steps) {

    const [curretStep, setCurretStep] = useState(0);

    function changeStep(i,e){
     if (e) e.preventDefault();

      if(i < 0 || i >= steps.length) return

      setCurretStep(i);

    }
  return {

    curretStep, 
    curretComponent: steps[curretStep],
    changeStep,
    isLastStep: curretStep + 1 === steps.length ? true : false,
    isFirstStep : curretStep === 0? true : false,
  };
}
