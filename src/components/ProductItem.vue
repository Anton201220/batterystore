<template>
     <div class="column is-4 is-hoverable">
<div class="card card-shadow">
  <div class="card-image">
    <figure class="image is-4by3">
      <img v-bind:src = prod.imgUrl alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content has-text-centered">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="../assets/smallBattery.png" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4 is-size-3">{{prod.manufacturer}}</p>
      </div>
    </div>
    <div class="content">
      <div class="is-size-5"><strong>{{prod.capacity}}</strong></div><br>.
      <a href="#">#акуммулятори</a> <a href="#">#batteries</a>
      <br>
      <div class="is-size-5"><strong>{{prod.countryOrigin}}</strong></div><br>
      <div class="is-size-5"><strong>{{prod.price}}</strong></div><br>
      <time>{{localeDate}}</time>
    </div>
  </div>
  <footer class="card-footer">
    <router-link  class="card-footer-item" :to="{ name: 'details', params: {prod: id} }">Більше</router-link>
   <!--  <a href="#" class="card-footer-item">Замовити</a> -->
  </footer>
</div>
    </div>
    
</template>

<script>

export default {

  props:['prod'],
  
   data () {
    return {
      id: ''
    }
  },
  computed: {
        localeDate() {
            return (new Date().toLocaleDateString()) 
        }
    },
  
  created() {
    this.id = this.prod.id; 
  },

}
</script>

