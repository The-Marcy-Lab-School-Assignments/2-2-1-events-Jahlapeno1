const incrementButton = () => {
  /** FEEDBACK: Do we need to redeclare the countButton here? */
  let countButton = document.querySelector("#add-one")
  let counter = document.querySelector("#results").textContent
  // console.log(counter)
  counter ++ 
  // console.log(counter)
  // console.log(document.querySelector("#results").textContent)
  // document.querySelector("#results").textContent
  document.querySelector("#results").textContent = counter
}

const main = () => { 
  let countButton = document.querySelector("#add-one")
  countButton.addEventListener('click', incrementButton)

}

main();