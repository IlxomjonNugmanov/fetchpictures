let $elul = document.querySelector('.ul')

let url = 'https://jsonplaceholder.typicode.com/photos'

fetch(url)
  .then(response => response.json())
  .then(json => ui(json))



function ui(arr) {
    arr.forEach(element => {
      let li = document.createElement("li")
          
      li.innerHTML = `
      <img src="${element.url}" alt="">
      <p>${element.title }</p>
     

      `

      $elul.append(li)
    }

)};