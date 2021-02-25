window.myClickFunction = function myClickFunction() {
	alert("Your first function!");
};

window.myEventListener = function myEventListener() {
	alert("Your first function Listener!");
};

document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
    


    
}
