


function toggleButton(element){
    //var allTopics = [].slice.call(element.parentElement.childNodes);
    var topic = element.parentElement;
    if(topic.classList.contains("compressed")){
        topic.classList.remove("compressed");
        topic.classList.add("decompressed");
        element.classList.remove("icon-caret-up");
        element.classList.add("icon-caret-down");
    }else{
        topic.classList.remove("decompressed");
        topic.classList.add("compressed");
        element.classList.remove("icon-caret-down");
        element.classList.add("icon-caret-up");
    }
}
 
var listOfQuestions = document.getElementsByClassName('question');
var qNum = -1;

//happens whenever a quesiton is clicked.
function questionClick(element){ 
    
    
    qNum = listOfQuestions.indexOf(element);
    window.location = window.location+"/"+qNum; 
    /* var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            var AJAXResponse = "" + this.responseText;
            if(AJAXResponse){
                goToRoom(AJAXResponse);
            }
        }
    }
    xhttp.open("GET","addToQueue.php?qNum=" + qNum + "&id=" + id);
    xhttp.send();*/
}

//make this function happen every 0.5 seconds after questionClick
function checkQueue(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            var AJAXResponse = "" + this.responseText;
            if(AJAXResponse){
                goToRoom(AJAXResponse);
            }
        }
    }
    xhttp.open("GET","checkMatch.php?qNum=" + qNum);
    xhttp.send();
}

function goToRoom(code){
    window.location = window.location.href + "/room/" + code;
}




/* card */

const card = document.querySelector(".card__inner");

card.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped');
});

 
/* FORM */ 
/*
function sendChat(){
    if(document.getElementById("chatInput").value !== ""){
    checkForChats(function(){
        var newChat = document.getElementById("chatInput").value
        document.getElementById("chatBody").innerHTML += "<div class = myChat>" + escapeHTML(newChat) + "</div>";
    });
    }
}
/*
function repeat(){
    setTimeout(function(){ alert("Hello"); }, 500);

}*/

