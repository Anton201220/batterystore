<template>
  <div id="app">
   <NavBar/>
   <router-view></router-view>

  </div>
</template>

<script>

import "firebase/database"
import "firebase/storage"

import NavBar from './components/NavBar'
import Home from './components/Home'

export default {
  name: 'App',
  components: {
    NavBar,
    Home,
  }
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

}
</style>
