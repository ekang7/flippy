/* card */
const card = document.querySelector(".card__inner");
const roomNum= 0; 
card.addEventListener("click", function (e) {
card.classList.toggle('is-flipped');
});
/* FORM */



var latestChatId = getLatestChatId();
setInterval(checkForChats,500);

function getLatestChatId(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            latestChatId = this.responseText;
        }
    }
    xhttp.open("GET","server/http://69.136.177.198:8000/flippy/room/"+roomNum+"/server/getLatestChatID.php");
    xhttp.send();
}

function checkForChats(after){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            var AJAXResponse = "" + this.responseText;
            var newChats = AJAXResponse.substring(AJAXResponse.indexOf("\n")+1);
            latestChatId = AJAXResponse.substring(0,AJAXResponse.indexOf("\n"));
            if(newChats!==""){
                document.getElementById("body").innerHTML += newChats;
                scrollToBottom("body");
            }
            if(after){
                latestChatId = "0";
                after();
            }
        }
    }
    xhttp.open("GET","http://69.136.177.198:8000/flippy/room/" + roomNum + "/server/newChats.php?t="+latestChatId);
    latestChatId = "0";
    xhttp.send();
    
}
function sendChat(){

    if(document.getElementById("sendChatBar").value !== ""){
    checkForChats(function(){
        var newChat = document.getElementById("sendChatBar").value
        document.getElementById("body").innerHTML += "<div class = myChat>" + escapeHTML(newChat) + "</div>";
        scrollToBottom("body");
        document.getElementById("sendChatBar").value = ""

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200) {
                var AJAXResponse = this.responseText;
                latestChatId = AJAXResponse;
            }
        }
        xhttp.open("POST","http://69.136.177.198:8000/flippy/room/" + roomNum + "/server/sendChat.php");
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhttp.send(`nChat=${newChat}`);
    });
    }
}

//https://stackoverflow.com/questions/1787322/htmlspecialchars-equivalent-in-javascript
function escapeHTML(text) {
    var map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

function scrollToBottom (id) {
    var div = document.getElementById(id);
    div.scrollTop = div.scrollHeight - div.clientHeight;
 }




















