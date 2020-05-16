auth.onAuthStateChanged(user =>{
    if(user){
      console.log('user logged in: ', user)
    }else{
      console.log('user logged out')
    }
  })

//log out

const logoutform =  document.querySelector('#logout');
logoutform.addEventListener('submit',(e) => {
    e.preventDefault();
  

    auth.signOut().catch(function(error) {
      // Handle Errors here.
      
      var errorMessage = error.message;
      
      alert(errorMessage)


    //auth state change


      
})

})