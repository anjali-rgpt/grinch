 //auth state change
auth.onAuthStateChanged(user =>{
  if(user){
    console.log('user logged in: ', user)
  }else{
    console.log('user logged out')
  }
})

//login
const loginform =  document.querySelector('#loginform');
loginform.addEventListener('submit',(e) => {
    e.preventDefault();
   
    // user info
    const email = loginform['username'].value;
    const password = loginform['password'].value;

    auth.signInWithEmailAndPassword(email , password).catch(function(error) {
      // Handle Errors here.
      
      var errorMessage = error.message;
      
      alert(errorMessage)


    //auth state change


      
})

})



