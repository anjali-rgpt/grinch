
const form = document.querySelector('#registration')


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form['emailsignup'].value;
    const password = form['passwordsignup'].value;
    db.collection('faculty-registration').add({
        first_name: form.firstnamesignup.value,
        last_name: form.lastnamesignup.value,
        phone_number: form.phonenumbersignup.value,
        user_name : form.usernamesignup.value,
        mail_id :form.emailsignup.value,
        password : form.passwordsignup.value
    })
   //sign up the user
   auth.createUserWithEmailAndPassword(email, password).then(function(){
    var user = firebase.auth().currentUser;

    user.sendEmailVerification().then(function() {
      // Email sent.
    }).catch(function(error) {
        var errorMessage = error.message;
    
        alert(errorMessage) 
    });

   }).catch(function(error) {
    // Handle Errors here.
    
    var errorMessage = error.message;
    
    alert(errorMessage) 
});


});

//auth
//auth 
auth.onAuthStateChanged(user =>{
    if(user){
      var user = auth.currentUser;

      if( user != null){
          var email_id = user.email;
          var mail_verify = user.emailVerified;
      }

    }else{
      console.log('user logged out')
    }
  })


  function send_verification(params) {
   
  }

