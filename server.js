
let NewsContent = document.getElementById("NewsContent");

const xhr = new XMLHttpRequest();
xhr.open('GET', "https://newsapi.org/v2/top-headlines?country=us&apiKey=98ebd886b4cb4c75925b11848c4adc30", true)


xhr.onprogress=function()
{
    let abc=document.getElementById("spinner")
    abc.innerHTML=`<div class="d-flex align-items-center">
    <strong>Loading...</strong>
    <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
  </div>`
}
xhr.onload = function () {
   
    if (this.status ===200) 
    {
        
     setTimeout(() => {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let abc=document.getElementById("spinner")
        abc.innerHTML=` `
    


        articles.forEach(function (element) {
            NewsContent.innerHTML += `
            <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${element.urlToImage}" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title"><a href = "${element.url}">${element.title}</a></h5>
                  <p class="card-text">${element.content}</p>
                  <p class="card-text"><small class="text-muted">${element.author}</p>
                </div>
              </div>
            </div>
          </div>
 `
        });
    
     }, 1000);}
    else {
      let abc=document.getElementById("spinner")
      abc.innerHTML= `<div class="alert alert-danger" role="alert">
 Status code 200 recieve nahi huwa beh Gandu
  </div>` }
}
xhr.send()



