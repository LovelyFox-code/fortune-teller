async function displayAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const advice = await response.json();
    console.log("AWAITED PROMISE", advice.slip.advice);
    console.log(response.json());
    document.getElementsByClassName("text")[0].innerHTML = advice.slip.advice;
  }

  
