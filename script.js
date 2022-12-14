const checkInput = (input) => {
  if(!parseInt(input.value)) input.value = 50 // input not a number
  if (parseInt(input.value) < 1) input.value = 1 // Input less than 1
  if (parseInt(input.value) > 50) input.value = 50 // Input bigger than 50
}

document.querySelector('.github').onclick = () => {
  window.location.href = 'https://github.com/Wonkers0/karelImage'
}

document.querySelector('button').onclick = () => {
  navigator.clipboard.readText().then(text => { // Get URL from clipboard
    const Http = new XMLHttpRequest(); // HTTP Request to API
    Http.open("POST", 'https://getImagePixels.wonk2.repl.co', true); // Post request, URL of server, "true" is for Asynchronous request
    Http.setRequestHeader('Content-Type', 'application/json;charset=UTF-8') // JSON Request Body
    
    let params = { // Request Body
      "imageURL": text,
      "width": !parseInt(document.querySelector('#width').value) ? 50 : parseInt(document.querySelector('#width').value),
      "height": !parseInt(document.querySelector('#height').value) ? 50 : parseInt(document.querySelector('#height').value),
      "useCustomSizeProps": !document.querySelector('.useCustomProps').checked
    }
    
    Http.send(JSON.stringify(params)); // Send HTTP Request to server
    
    Http.onreadystatechange = (e) => {
      navigator.clipboard.writeText(Http.responseText) // Copy response from server
    }
  })
}
