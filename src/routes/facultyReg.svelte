<script>
    let email, password, firstName, lastName, phoneNumber, userName;

    const submit = () => {
        console.log(email, password)
        auth.createUserWithEmailAndPassword(email, password)
            .then(() => {
                let user = auth.currentUser;
                user.sendEmailVerification()
                    .then(() => {
                        console.log('Email sent!')
                    }).catch(error => {
                        alert(error.message)
                    });
                db.collection('faculty-registration').add({
                    first_name: firstName,
                    last_name: lastName,
                    phone_number: phoneNumber,
                    user_name: userName,
                    email_id: email,
                    password: password
                });
            })
            .catch(error => {
                console.log(error.message)
            })
    }
</script>

<div class="section container is-fluid">

    <h1 class="is-size-1 has-text-centered">Faculty Registration</h1>

    <label class="label" for="firstname">First Name</label>
    <div class="" data-validate="First Name required">
        <input class="input" type="text" name="firstname" id="firstname" placeholder="First Name"
            bind:value={firstName}>
    </div>

    <label class="label" for="lastname">Last Name </label>
    <div class="" data-validate="Last Name required">
        <input class="input" type="text" name="lastname" id="lastname" placeholder="Last Name" bind:value={lastName}>
    </div>

    <label class="label" for="phonenumber">Phone Number </label>
    <div class="" data-validate="Phone Number required">
        <input class="input" type="text" name="phoneNum" id="phoneNum" placeholder="Phone Number"
            bind:value={phoneNumber}>
    </div>

    <label class="label" for="username">Username</label>
    <div class="" data-validate="Username required">
        <input class="input" type="text" name="username" id="username" placeholder="UserName" bind:value={userName}>
    </div>

    <label class="label" for="email">E-Mail ID </label>
    <div class="" data-validate="Email ID required">
        <input class="input" type="text" name="email" id="email" placeholder="E-Mail ID" bind:value={email}>
    </div>

    <label class="label" for="password">
        Password
    </label>

    <div class="" data-validate="Password is required">
        <span class="btn-show-pass">
            <i class="fas fa-eye"></i>
        </span>
        <input class="input" type="password" name="password" id="passwordsignup" placeholder="Password" bind:value={password}>

    </div>

    <label class="label" for="confirmpass">
        Confirm Password
    </label>
    <div class="" data-validate="Confirming Password is required">
        <span class="btn-show-pass">
            <i class="fas fa-eye"></i>
        </span>
        <input class="input" type="password" name="password_confirm" id="password_confirm"
            placeholder="Retype Password">

    </div>

    <button class="button is-medium is-primary pad-top" on:click={submit}>Sign Up</button>

    <br>
    <br>

    <div>
        <p>
            Are you a member already? Click here: <br>
            <a href="/facultyLogin"> Sign In</a>
        </p>
    </div>

</div>

<style>
    .pad-top {
        margin-top: 1rem;
    }

    .label {
        margin-top: 1.5rem;
    }
</style>