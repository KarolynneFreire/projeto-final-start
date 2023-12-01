import { useState } from "react";



export  function pagForm(progress) {

    const [curretProgress, setCurretProgress] = useState(0);

    function changeProgress(i,e){
     if (e) e.preventDefault();

      if(i < 0 || i >= progress.length) return

      setCurretProgress(i);

    }
  return {

    curretProgress, 
    curretComponent: progress[curretProgress],
    changeProgress,
    isLastProgress: curretProgress + 1 === progress.length ? true : false,
    isFirstProgress : curretProgress === 0? true : false,
  };
}
