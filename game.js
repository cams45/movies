function cart(){

  var value1 = document.getElementById("search").value;
  alert("hello"+value1)
  
  var location = "https://www.omdbapi.com/?t="+value1+"&apikey=f7f7c6d2"
  document.getElementById("results").value = value1;

}

var acart = [];
function addMovie(imdbID){
  alert("movies list = " +acart)
  var imdbID = document.getElementById("search").value;
  acart.unshift(imdbID)
  alert("movie added = "+imdbID)
  alert("movies list = " +acart)
  document.getElementById("cart").value = acart;
}



function confirmCancel(){
alert("added to cart");	
}



function confirmCheckout(){
	alert("hello"+value)
}

function confirmLogout(){
	alert("hello"+value)
}

function confirmRemove(title, movieID){
	var resp = window.prompt("enter the movie you wish to remove")
  const index = acart.indexOf(resp);
   if(!acart.includes(resp)){
    alert(resp+"yes")
  }

  
if (index > -1) {
  acart.splice(index, 1);
  document.getElementById("cart").value = acart;
}
}