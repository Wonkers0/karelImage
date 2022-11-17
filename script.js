document.querySelector('button').onclick = () => {
  navigator.clipboard.readText().then(text => {
    const Http = new XMLHttpRequest();
    Http.open("POST", 'https://getImagePixels.wonk2.repl.co', true);
    Http.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
  
    let params = {
      "imageURL": text,
      "width": 50,
      "height": 50,
      "useCustomSizeProps": false
    }
    
    Http.send(JSON.stringify(params));
    
    Http.onreadystatechange = (e) => {
      navigator.clipboard.writeText(Http.responseText)
    }
  })
}
