function formValidation()
{
var uid = document.registration.usernamesignup;
var passid = document.registration.passwordsignup;
var fname = document.registration.firstnamesignup;
var lname = document.registration.lastnamesignup;
var phone = document.registration.phonenumbersignup;
var uemail = document.registration.emailsignup; 
var confirmpass = document.registration.passwordsignup_confirm;
    if(username_validation(uid,5,12))
    {
        if(passid_validation(passid,8))
        {
            if(pass_match(passid,confirmpass))
            {    
                if(allLetter(fname))
                {
                    if(allLetter(lname))
                    {   
                        if(allnumeric(phone))
                        {
                            if(ValidateEmail(uemail))
                            {
                            }
                        } 
                    }

                }
            }
        }
    }
    return false;
}
 // This function will validate fName.
 function allLetter(fname)
 { 
 var fname = document.registration.firstnamesignup;
 var letters = /^[A-Za-z]+$/;
 if(fname.value.match(letters) )
 {
 return true;
 }
 else
 {
 alert('firstname must have alphabet characters only');
 fname.focus();
 return false;
 }
 }
   // This function will validate lName.
   function allLetter()
   { 
   var lname = document.registration.lastnamesignup;
   var letters = /^[A-Za-z]+$/;
   if(lname.value.match(letters) )
   {
   return true;
   }
   else
   {
   alert('lastname must have alphabet characters only');
   lname.focus();
   return false;
   }
   }
 // This function will validate Phonenumber.
 function allnumeric(phone)
 { 
 var phone1 = phone.value;
 var phone_len = phone1.length;
 var numbers = /^[0-9]+$/;
 if(phone1.value.match(numbers)&& phone_len==10)
 {
 return true;
 }
 else
 {
 alert('Phone Number must have numeric characters only');
 phone.focus();
 return false;
 }
 }
// This function will validate User id.
 function username_validation( uid,mx,my)
 {
 var username = uid
 var username_len = uid.value.length;
 var letters = /^[0-9a-zA-Z]+$/;
 if ((username_len != 0 && username_len <= my && username_len > mx) && username.value.match(letters))
 {
   
    return true;
 }
 alert("User Id should not be empty / user name shouldnot contain spl characters / length be between "+mx+" to "+my );
 username.focus();
 return false;
 }

 // This function will validate Email.
 function ValidateEmail(uemail)
 {
 var uemail1 = uemail;
 var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 if(uemail1.value.match(mailformat))
 {
    alert('Form Succesfully Submitted');
    return true;
 }
 else
 {
 alert("You have entered an invalid email address!");
 uemail.focus();
 return false;
 }
 }
// This function will validate Password.
 function passid_validation(passid,mx)
 {
 var passid = passid;
 var passid_len = passid.value.length;
 var pass =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
 if (passid_len != 0 && passid_len > mx && passid.value.match(pass))
 {
 return true;
 }
 alert("Password should not be empty/password should contain 1 special character 1 cap.letter 1 number 1 sletter / length should be greater than "+mx);
 passid.focus();
 return false;
 }
 // This Function will Validate Password matching
 function pass_match(passid,confirmpass)
 {
   var passid1 = passid.value;
   var cpassid = confirmpass.value; 
   if (passid1 === cpassid ) {
    
     return true;
   }
   else{
     alert("passwords didnot match please check again")
     cpassid.focus();
     return false;
   }
 }

