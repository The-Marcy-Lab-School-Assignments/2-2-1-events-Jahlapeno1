// These are your event handlers
const clickCounterHandler = (e) => {
  // console.log(e.target)
  const clickButton = e.target
  // console.log(clickButton)
  let time = "time."
  clickButton.dataset.clicks++
  if (clickButton.dataset.clicks > 1) {
    time = "times!"
  }
  clickButton.textContent = `I've been clicked ${clickButton.dataset.clicks} ${time}`
};

const handleKeydown = (e) => {
  const para = document.querySelector("#keydown-tracker")
  // console.log(para.textContent)
  para.textContent = `You pressed ${e.code}`
  // console.log(e)
  // console.log(para.textContent)
};

// We've started this one for you
const handleDelegation = (event) => {
  const resultSpan = document.querySelector('#delegation-result');
  // console.log(event.target)
  // console.log(event.target.tagName)
  if (event.target.tagName === "BUTTON") {
    resultSpan.textContent = event.target.textContent;
  }
  
};

const addNewRandomNumber = () => {
  const li = document.createElement("li")
  li.textContent = Math.random()
  const unlist = document.querySelector("#random-numbers")
  unlist.append(li)
};

const removeEvent = () => {
  const deleCont = document.querySelector("#delegation")
  deleCont.removeEventListener("click", handleDelegation)
}


// Select the elements and attach your event handlers inside main
const main = () => {
  const delegationContainer = document.querySelector('#delegation');
  delegationContainer.addEventListener('click', handleDelegation);
  
  const clickedButton = document.querySelector("#click-button")
  clickedButton.addEventListener('click', clickCounterHandler)
  
  document.body.addEventListener('keydown', handleKeydown)

  const otherClickedButton = document.querySelector("#inline-example")
  otherClickedButton.addEventListener('click', clickCounterHandler)

  const resultSpan = document.querySelector('#delegation-result')
  resultSpan.addEventListener('click', handleDelegation)

  const randoButton = document.querySelector("#add-random-num")
  randoButton.addEventListener('click', addNewRandomNumber)
  
  const removeButt = document.querySelector("#remove")
  removeButt.addEventListener('click', removeEvent)
};

main();
