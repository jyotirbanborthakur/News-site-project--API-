
let NewsContent = document.getElementById("NewsContent");

const xhr = new XMLHttpRequest();
xhr.open('GET', "https://gnews.io/api/v4/search?q=example&token=967c5fd9715ca031cdbde28f3e6b00d4", true)


xhr.onprogress = function () {
  let abc = document.getElementById("spinner")
  abc.innerHTML = `<div class="d-flex align-items-center">
    <strong>Loading...</strong>
    <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
  </div>`
}
xhr.onload = function () {

  if (this.status === 200) {

    setTimeout(() => {
      let json = JSON.parse(this.responseText);
      let articles = json.articles;
      let abc = document.getElementById("spinner")
      abc.innerHTML = ` `



      articles.forEach(function (element) {
        NewsContent.innerHTML += `
            <div class="col">
            <div class="card h-100">
              <img src="${element.image}" class="card-img-top" alt="N/A">
              <div class="card-body">
                <h5 class="card-title" id="card-title">${element.title}</h5>
                <p class="card-text"><a href = ${element.url} target ="#">${element.description}</a></p>
              </div>
              <div class="card-footer">
              <small class="text-muted">News by ${element.source.name}</small>
            </div>
            </div>
          </div>
 `
      });
     
 
    

    }, 1000);
  }
  else {
    let abc = document.getElementById("spinner")
    abc.innerHTML = `<div class="alert alert-danger" role="alert">
 Status code 200 recieve nahi huwa 
  </div>` }
}
xhr.send()



