function cart(){

}

var acart = [];
function addMovie(imdbID){
alert("movies list = " +acart)
var imdbID = document.getElementById("search").value;
acart.unshift(imdbID)
alert("movie added = "+imdbID)
alert("movies list = " +acart)
window.localStorage.setItem('acart', JSON.stringify(acart));
localStorage.setItem("Title", JSON.stringify(acart));
document.getElementById("cart").value = localStorage.getItem("Title", JSON.stringify(acart)
}

function confirmCancel(){
alert("added to cart");	
}



function confirmCheckout(){
	alert("helloooo")
}

function confirmLogout(){
	alert("hello "+value)
}

function confirmRemove(title, movieID){
var resp = window.prompt("enter the movie you wish to remove")
  const index = acart.indexOf(resp);
   if(!acart.includes(resp)){
    alert(resp+"yes")
    storage.removeItem('Title',resp);
  }
     if (index > -1) {
     acart.splice(index, 1);
     document.getElementById("cart").value = acart;
     event.preventDefault();

}
}