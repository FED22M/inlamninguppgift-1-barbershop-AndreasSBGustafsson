const userAgent = navigator.userAgent.toLowerCase();
console.log(userAgent.indexOf("safari"));
if(userAgent.indexOf("safari") !== -1) {
    const img = document.getElementsByClassName("service-img")
    const aboutImg = document.getElementsByClassName("about-img")
    const quoteImg = document.getElementsByClassName("quote-icon")
    const starImg = document.getElementsByClassName("review-star")
    const customerImg = document.getElementsByClassName("cstmr-img")
    
    
    for (let index = 0; index < img.length; index++) {
    img[index].addEventListener("error", function(event) {
        event.target.src = "./asset/img/haristyle-img.png"
        event.onerror = null;
    }),false}
    
    aboutImg[0].addEventListener("error", function(event) {
      event.target.src = "./asset/img/about-img-gradient-2.png"
      event.onerror = null
    })
    
    for (let index = 0; index < quoteImg.length; index++) {
        quoteImg[index].addEventListener("error", function(event) {
            event.target.src = "./asset/img/quote-icon.png"
            event.onerror = null;
        }),false}
    
    for (let index = 0; index < starImg.length; index++) {
        starImg[index].addEventListener("error", function(event) {
            event.target.src = "./asset/img/review-stars.png"
            event.onerror = null;
        }),false}  
    
    for (let index = 0; index < customerImg.length; index++) {
        customerImg[index].addEventListener("error", function(event) {
            event.target.src = "./asset/img/mustache-guy.png"
            event.onerror = null;
        }),false}
}
