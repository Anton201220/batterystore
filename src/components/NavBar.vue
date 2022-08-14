<template>
    <b-navbar>
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="../assets/battery3.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        
        <template #start>
            <b-navbar-item href="#">
                <router-link to="/">Головна</router-link>
            </b-navbar-item>
            <b-navbar-item href="#">
                <router-link to="/about">Про нас</router-link>
            </b-navbar-item>
        
        <b-navbar-dropdown label="Контакти">
                <b-navbar-item href="#">
                     <router-link to="">Антон - 09363977726</router-link>
                </b-navbar-item>
                <b-navbar-item href="#">
                     <router-link to="">Сергій - 0936977726</router-link>
                </b-navbar-item>
            </b-navbar-dropdown>
            
        </template>
        
        <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                   <button class="button is-primary" v-on:click="logOut">Вийти</button>
                    <router-link  class="button is-primary" to="/login">Увійти</router-link>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>


import firebase from 'firebase/app'
import "firebase/auth"
import router from '../router'

export default {

  methods: {
 
  logOut() {
   try {
  
   firebase.auth().signOut().then(() => {
        
        localStorage.removeItem('token')
        
       // console.log('LogOut')
        router.replace({ name: "login" })

      })

    }  catch (error) { 
       const errorMessage = error.message
       console.log('LogOut Error: ', errorMessage)
       }
} 
 
 }

}
</script>
