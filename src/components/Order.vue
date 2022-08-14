<template>
     <section class="container">
      <div class="columns is-multiline">
        <div class="column is-8 is-offset-2 register">
          <div class="columns">
            <div class="column left">
              <h5 class="title is-1">Ваше замовлення</h5>
             
             <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img :src=product.imgUrl alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
       <div class="content  has-text-centered">
        <h4 class="title is-4 is-italic">{{product.manufacturer}}</h4>
        <h6 class="is-italic">{{product.countryOrigin}}</h6>
     <h6 class="is-italic">{{product.capacity}}</h6>
      <h6 class="is-italic">{{product.startCapacity}}</h6>
      <h6 class="is-italic">{{product.price}} грн</h6>
      <time>{{localeDate}}</time>
    </div>
  </div>
</div>
            </div>
            <div class="column right has-text-centered">
              <h1 class="title is-4">Замов сьогодні</h1>
              <p class="description">Залиште ваші дані щоб ми з вами звязались</p>
              <form v-on:submit.prevent="saveOrder">
                <div class="field">
                  <div class="control">
                    <input class="input is-medium" type="text"  v-model.trim="name"  placeholder="Ім'я">
                  </div>
                </div>

                <div class="field">
                  <div class="control">
                    <input class="input is-medium" type="text" v-model.trim="phone" placeholder="Телефон">
                  </div>
                </div>
                <button class="button is-block is-primary is-fullwidth is-medium" type="submit">
                    Замовити
                    </button>
                <br />
                <small><em>Ми обовязково з вами звяжемось протягом 10хв</em></small>
              </form>
            </div>
          </div>
        </div>
        <div class="column is-8 is-offset-2">
          <br>
          <nav class="level">
            <div class="level-left">
              <div class="level-item">
                <span class="icon">
                  <i class="fab fa-twitter"></i>
                </span> &emsp;
                <span class="icon">
                  <i class="fab fa-facebook"></i>
                </span> &emsp;
                <span class="icon">
                  <i class="fab fa-instagram"></i>
                </span> &emsp;
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span> &emsp;
                <span class="icon">
                  <i class="fas fa-envelope"></i>
                </span>
              </div>
            </div>
            <div class="level-right">
              <small class="level-item" style="color: var(--textLight)">
                &copy; Ми обовязково вам перетелефонуємо.
              </small>
            </div>
          </nav>
        </div>
      </div>
    </section>
</template>

<script>
import firebase from "firebase/app"
import "firebase/storage"
import 'firebase/firestore'

export default {

  data: () => ({
    id:'',
    product: '',
    name:'',
    phone:''
  }),

    computed: {
        localeDate() {
            return (new Date().toLocaleDateString()) 
        }
    },

  async mounted() {
  
  try {
      this.product = await  this.$store.dispatch('fetchProductById', this.$route.params.id);
  //   console.log(this.product);
    
    } catch (e) {
      console.log(e)
    }
  },

methods: {
 
  async saveOrder() {
  

  const db = firebase.firestore()

    this.product.id = this.$route.params.id
      
      const orderData = {
        name: this.name,
        phone: this.phone,
        product: this.product
    } 

    const today = new Date();

    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()

    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()

    const dateTime = date + ' ' + time

  db.collection("orders").add({
        date: dateTime,
        name: this.name,
        phone: this.phone,
        product: this.product
  })
  .then((docRef) => {
  //    console.log("Document written with ID: ", docRef.id)
      this.$buefy.toast.open({
                      duration: 3000,
                      message: `Ваше замовлення ${docRef.id} зареєстровано`,
                      position: 'is-bottom',
                      type: 'is-danger'
                  })
  })
  .catch((error) => {
      console.error("Error adding document: ", error)
  })


}
  }

}
</script>