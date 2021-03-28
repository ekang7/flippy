/*jshint esversion: 6 */
const auth = firebase.auth();
const signedinpage = document.getElementById('signedinpage');
const signedoutpage = document.getElementById('signedoutpage');
const signinbutton = document.getElementById('signinbutton');
const signoutbutton = document.getElementById('signoutbutton');
const userinfo = document.getElementById('userinfo');
const provider = new firebase.auth.GoogleAuthProvider(); 

signinbutton.onclick = () => auth.signInWithPopup(provider);
signoutbutton.onclick = () => auth.signOut(); 
const db = firebase.firestore(); 
let usersref; 
let unsubscribe; 

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
    }
    else{
     signedinpage.hidden = true;
     signedoutpage.hidden = false; 
     userinfo.innerHTML = ''; 
    }


}); 