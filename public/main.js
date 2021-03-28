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

function questionClick(element){
    console.log("hi");
    window.location = window.location + "chat.html";
}

/* card */

const card = document.querySelector(".card__inner");

card.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped');
});


/* FORM */ 

function sendChat(){
    if(document.getElementById("chatInput").value !== ""){
    checkForChats(function(){
        var newChat = document.getElementById("chatInput").value
        document.getElementById("chatBody").innerHTML += "<div class = myChat>" + escapeHTML(newChat) + "</div>";
    });
    }
}

