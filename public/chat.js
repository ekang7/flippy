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
 

