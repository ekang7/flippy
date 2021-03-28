/*jshint esversion: 6 */

var signedinpage = document.getElementById('signedinpage');
var signedoutpage = document.getElementById('signedoutpage');
var signinbutton = document.getElementById('signinbutton');
var signoutbutton = document.getElementById('signoutbutton');
var userinfo = document.getElementById('userinfo');
var provider = new firebase.auth.GoogleAuthProvider(); 

signinbutton.onclick = () => auth.signInWithPopup(provider);
signoutbutton.onclick = () => auth.signOut(); 
var db = firebase.firestore(); 
var usersref; 
var unsubscribe; 

var listOfQuestions = Array.from(document.getElementsByClassName('question'));
var qNum = -1;

//happens whenever a quesiton is clicked.
function questionClick(element){ 
    
    console.log(listOfQuestions);
    qNum = listOfQuestions.indexOf(element);
    window.location = window.location+"room/"+qNum+"/index.html"; 
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
var auth = firebase.auth();
auth.onAuthStateChanged(user =>{
    if(user) //signedin
    {
     usersref = db.collection('users');
     signedinpage.hidden = false; 
     signedoutpage.hidden = true; 
     const { serverTimestamp } = firebase.firestore.FieldValue; 
     userinfo.innerHTML = `<h2>Hello ${user.displayName}</h2>`;
     usersref.add({
        uid: user.uid, 
        name: user.displayName,
        creationDate: serverTimestamp() 

     });   
     document.getElementById("yourname").innerHTML = "Jane Doe"; 


    }
    else{
     signedinpage.hidden = true;
     signedoutpage.hidden = false; 
     userinfo.innerHTML = ''; 
    }


}); 



