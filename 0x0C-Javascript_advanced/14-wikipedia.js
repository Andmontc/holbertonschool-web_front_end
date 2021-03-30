
let createElement = function(data) {
  let paragraph = document.createElement('p')
  paragraph.append(data)
  document.body.appendChild(paragraph)
}

let queryWikipedia = function(callback) {
  let data = new XMLHttpRequest();
  data.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*')

  data.responseType = 'json'

  data.onload = _ => callback(info.response.query.pages['21721040'].extract)

  data.send()
}

queryWikipedia(createElement);
