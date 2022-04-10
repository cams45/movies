



function cart(){

  var value1 = document.getElementById("search").value;
  alert("hello"+value1)
  
  var location = "https://www.omdbapi.com/?t="+value1+"&apikey=f7f7c6d2"
  document.getElementById("results").value = value1;
event.preventDefault();

}

var acart = [];



function getcart(){
  alert("helloooo")
  var arr = localStorage.getItem("Title");
  document.getElementById("cart").value = localStorage.getItem("Title", JSON.stringify(acart));
  alert("arr = "+acart)
}




function addMovie(imdbID){
alert("movies list = " +acart)
var imdbID = document.getElementById("search").value;
acart.unshift(imdbID)
alert("movie added = "+imdbID)
alert("movies list = " +acart)
window.localStorage.setItem('acart', JSON.stringify(acart));
localStorage.setItem("Title", JSON.stringify(acart));
document.getElementById("cart").value = localStorage.getItem("Title", JSON.stringify(acart));


}

function confirmCheckout(){
  
alert("added to cart");
}



function confirmCancel(){

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
    storage.removeItem('Title',resp);
  }
     if (index > -1) {
     acart.splice(index, 1);
     document.getElementById("cart").value = acart;
     event.preventDefault();

}
}




function test(){
    $.ajax({url:"search.php", success:function(result){
    $("div").text(result);}
})
} 






function cart1(){
  alert("hello")
  var value1 = document.getElementById("search").value;
  alert("hello"+value1)
  
  var location = "https://www.omdbapi.com/?t="+value1+"&apikey=f7f7c6d2"
  document.getElementById("results").value = value1;

}


function addMovie1(imdbID){
  alert("movies list = " +acart)
  var imdbID = document.getElementById("search").value;
  acart.unshift(imdbID)
  alert("movie added = "+imdbID)
  alert("movies list = " +acart)
  document.getElementById("cart").value = acart;
}



function confirmCancel1(){
alert("added to cart");	
}



function confirmCheckout1(){
	alert("hello"+value)
}

function confirmLogout1(){
	alert("hello"+value)
}

function confirmRemove1(title, movieID){
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

