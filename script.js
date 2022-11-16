document.querySelector('button').onclick = () => {
  let img = navigator.clipboard.readText()

  const Http = new XMLHttpRequest();
  const url = 'https://getImagePixels.wonk2.repl.co';
  Http.open("GET", url);
  Http.send();
  
  Http.onreadystatechange = (e) => {
    console.log(Http.responseText)
  }
}
