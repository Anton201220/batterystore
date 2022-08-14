<template>
    <section class="hero is-success is-fullheight">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-4 is-offset-4">
                    <h3 class="title has-text-black">Login</h3>
                    <hr class="login-hr">
                    <p class="subtitle has-text-black">Please login to proceed.</p>
                    <div class="box">
                
                        <form v-on:submit.prevent="logIn"> 
                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="text" placeholder="Your Email" 
                                    v-model.trim="email">
                                </div>
                            </div>

                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="password" placeholder="Your Password" 
                                    v-model.trim="password">
                                </div>
                            </div>
                           <!--  <div class="field">
                                <label class="checkbox">
                  <input type="checkbox">
                  Remember me
                </label>
                            </div> -->
                            <button class="button is-block is-info is-large is-fullwidth" type="submit">Увійти<i class="fa fa-sign-in" aria-hidden="true"></i></button>
                        </form>
                    </div>
                    <p class="has-text-grey">
                        <a href="../">Sign Up</a> &nbsp;·&nbsp;
                        <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                        <a href="../">Need Help?</a>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import firebase from 'firebase/app'
import "firebase/auth"
import router from '../router'

export default {
    
 data () {
    return {
      email: "",
      password:'',
    }
 },

  methods: {

   logIn() {
      
  // console.log('Auth', this.email, this.password)
  
     
   firebase.auth().signInWithEmailAndPassword(this.email, this.password)
    .then((userCredential) => {
     
      const user = userCredential.user
      
      if(user) {
    //  console.log('User', user)

      localStorage.setItem('token', user.uid)
      
      router.replace({ name: "products" })

    } else{
        return
    }
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('Error: ', errorMessage, errorCode);
    })

    },
 
 }
  
}
</script>
