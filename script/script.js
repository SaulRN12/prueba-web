var cursor=document.getElementById('cursor');
        
        document.onmousemove=function (e) {
            
            cursor.style.left=e.pageX-340 + 'px';
            cursor.style.top=e.pageY-470 + 'px';
        }

var opinionButton = document.getElementById('opinion-button');
        var graciasIt = function() {
            var graciasDiv = document.getElementById("agradecimientos");
            var opinionEl = document.getElementById("opinion"); 
            
            graciasDiv.innerHTML = "Muchas gracias por su opinion!! ";
        };
        opinionButton.addEventListener('click', graciasIt);


let myImage = document.getElementById("logo-luffy");

myImage.onclick = function() {
  let mySrc = myImage.getAttribute("src");
  if(mySrc === "https://p4.wallpaperbetter.com/wallpaper/689/326/387/skull-glow-hat-bones-wallpaper-preview.jpg") {
    myImage.setAttribute ("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ0kZlt2eyb9ukU1lC7ECPQT7v5ZOrjeRw0Q&usqp=CAU");
  } else {
    myImage.setAttribute ("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ0kZlt2eyb9ukU1lC7ECPQT7v5ZOrjeRw0Q&usqp=CAU");
  };
};
