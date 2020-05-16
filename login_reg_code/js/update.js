const form = document.querySelector('#updateform');

var user = firebase.auth().currentUser;

user.updateProfile({
    phone_number: form.updatedphonenumber.value,
    password : form.updatedpassword.value
}).then(function() {
  // Update successful.
  alert('Update successful.')
}).catch(function(error) {
  // An error happened.
  alert('please check the deatils and try again')
});


user.updateEmail(mail_id = form.updatedmail_id.value).then(function() {
    // Update successful.
    alert('Update successful.')
  }).catch(function(error) {
    // An error happened.
  })

  user.sendEmailVerification().then(function() {
    // Email sent.
  }).catch(function(error) {
    // An error happened.
  });