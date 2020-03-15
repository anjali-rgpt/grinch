<script>
let email,password,firstName,lastName,phoneNumber,userName;

const submit=()=>{
     
    db.collection('faculty-registration').add({
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
        user_name : form.usernamesignup.value,
        email_id :email,
        password : password
});

auth.createUserWithEmailAndPassword(email, password).catch( error => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorCode)
    alert(errorMessage)
});
}
</script>

<label for="firstname">First Name</label>
<div class="" data-validate = "First Name required">
 <input class="input" type="text" name="firstname" id="firstname" placeholder="First Name" bind:value={firstName}>
</div>
                    
<label for="lastname">Last Name </label>
<div class="" data-validate = "Last Name required">
<input class="input" type="text" name="lastname" id="lastname" placeholder="Last Name" bind:value={lastName}>
</div>
                    
<label for="phonenumber">Phone Number </label>
<div class="" data-validate = "Phone Number required">
<input class="input" type="text" name="phoneNum" id="phoneNum" placeholder="Phone Number" bind:value={phoneNumber} >
</div>                                       
                    
<label for="username">Username</label>
<div class="" data-validate = "Username required">
<input class="input" type="text" name="username" id="username" placeholder="UserName" bind:value={userName} >
</div> 
                    
<label for="email">E-Mail ID </label>
<div class="" data-validate = "Email ID required">
<input class="input" type="text" name="email" id="email" placeholder="E-Mail ID" bind:value={email} >
</div> 
                                        
                                        <label for="password">
                                            Password
                                        </label>
                                        <div class="" data-validate = "Password is required">
                                            <span class="btn-show-pass">
                                                <i class="fas fa-eye"></i>
                                            </span>
                                            <input class="input" type="password" name="password" id="passwordsignup" placeholder="Password" >
                                            
                                        </div>
                    
                                        <label for="confirmpass">
                                             Confirm Password
                                        </label>
                                        <div class="" data-validate = "Confirming Password is required">
                                            <span class="btn-show-pass">
                                                <i class="fa fa-eye"></i>
                                            </span>
                                            <input class="input" type="password" name="password_confirm" id="password_confirm" placeholder="Retype Password">
                                            
                                        </div>
                    
                                        <button on:click={submit}>Sign Up</button>
                                        
                                        <br>
                                        <br>
                                            
                                        <div>
                                            <p >
                                                Are you a member already? Click here: <br>
                                                <a href="/facultyLogin"> Sign In</a>
                                            </p>
                                        </div>

                                      