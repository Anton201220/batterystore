<template>
  <div class="container">
    <div class="columns">
      <div class="column is-3">
        <aside class="menu is-hidden-mobile">
          <p class="menu-label">General</p>
          <ul class="menu-list" v-on:click='cliCked($event)'>
            <li><a class="is-active">Товари</a></li>
            <li><a>Замовлення</a></li>
            <li><a>Other</a></li>
          </ul>
        </aside>
      </div>
      <div class="column is-9">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li><a href="../">Main</a></li>
            <li><a href="./Login">Login</a></li>
            <li><a href="/admin/products" aria-current="page">Proucts</a></li>
            <li><a href="/admin/orders">Orders</a></li>
          </ul>
        </nav>
        <section class="hero is-info welcome is-small">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">Hello, Admin.</h1>
              <h2 class="subtitle">I hope you are having a great day!</h2>
            </div>
          </div>
        </section>
        <section class="info-tiles">
          <div class="tile is-ancestor has-text-centered">
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="title">{{ ordersCount }}</p>
                <p class="subtitle">Orders</p>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="title">{{ count }}</p>
                <p class="subtitle">Products</p>
              </article>
            </div>
          </div>
        </section>
        <div class="columns">
          <div class="column is-6">
            <div class="card events-card">
              <header class="card-header">
                <p class="card-header-title">Дані</p>
                <a href="#" class="card-header-icon" aria-label="more options">
                  <span class="icon">
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                  </span>
                </a>
              </header>
              <div class="card-table" >

                <div class="content"  v-show="content_2">
                  <table class="table is-fullwidth is-striped">
                    <tbody>
                     <router-view></router-view>
                    </tbody>
                  </table>
                </div>

              </div>
              <footer class="card-footer">
                <a href="#" class="card-footer-item">View All</a>
              </footer>
            </div>
          </div>

          <div class="column is-6">
            <div class="card">
              <p class="card-header-title">Редагування</p>

              <b-field label="Індентифікатор" :label-position="labelPosition">
                <b-input v-model="id" disabled></b-input>
              </b-field>

              <b-field label="Виробник" :label-position="labelPosition">
                <b-input v-model="manufacturer"></b-input>
              </b-field>

              <b-field
                label="Країна виготовлення"
                :label-position="labelPosition"
                type="is-danger"
              >
                <b-input type="text" v-model="countryOrigin"> </b-input>
              </b-field>

              <b-field
                label="Ємкість"
                :label-position="labelPosition"
                type="is-success"
              >
                <b-input v-model="capacity"></b-input>
              </b-field>

              <b-field
                label="Стартовий струм"
                :label-position="labelPosition"
                type="is-warning"
              >
                <b-input v-model="startCapacity" type="text"></b-input>
              </b-field>
              <b-field label="Ціна" :label-position="labelPosition">
                <b-input v-model="price"></b-input>
              </b-field>

              <b-field
                label="Розміри"
                :label-position="labelPosition"
                type="is-danger"
              >
                <b-input type="text" v-model="size"> </b-input>
              </b-field>

              <b-field
                label="Полюсовка"
                :label-position="labelPosition"
                type="is-success"
              >
                <b-input v-model="plusScheme"></b-input>
              </b-field>

              <b-field
                label="Тип"
                :label-position="labelPosition"
                type="is-warning"
              >
                <b-input v-model="type" type="text"></b-input>
              </b-field>
              <b-button type="is-primary" expanded v-on:click="savaChagedData"
                >Зберегти зміни</b-button
              >
              <b-button  id="btn" type="is-dark" expanded v-on:click="deleteData"
                >Видалити</b-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

    <script>

import firebase from "firebase/app"
import "firebase/database"
import "firebase/storage"

import AdminProduct from "../components/AdminProduct"
import Orders from "../components/Orders"

export default {

  components: {
    AdminProduct,
    Orders
  },

  data() {
    return {
      content: '',
      content_2: true,
      count: 0,
      ordersCount: 0,
      labelPosition: "on-border",
      id: "",
      manufacturer: "",
      countryOrigin: "",
      capacity: "",
      startCapacity: "",
      price: "",
      size: "",
      plusScheme: "",
      type: "",
      imgUrl: "",
      
  }
  
  },


  watch: {
    '$store.getters.getCount': function(newVal, olDal) {
      this.count = newVal
      //console.log('Products' );
  
    },

    '$store.getters.getOrdersCount': function(newVal, olDal) {
      this.ordersCount = newVal
  
    },

    '$store.getters.getOneProduct': function(newVal, olDal) {
      //console.log('Watch', newVal )

      this.id = newVal.id
      this.manufacturer = newVal.manufacturer
      this.countryOrigin = newVal.countryOrigin
      this.capacity = newVal.capacity
      this.startCapacity = newVal.startCapacity
      this.price = newVal.price
      this.size = newVal.size
      this.plusScheme = newVal.plusScheme
      this.type = newVal.type
      this.imgUrl = newVal.imgUrl
  
    }
  },
  
  methods: {

    savaChagedData() {
      //console.log("Savechanges", this.id);
      const db = firebase.database().ref("Battery")
    

      db.child(this.id).set(
        {
          capacity: this.capacity,
          countryOrigin: this.countryOrigin,
          imgUrl: this.imgUrl,
          manufacturer: this.manufacturer,
          plusScheme: this.plusScheme,
          price: this.price,
          size: this.size,
          startCapacity: this.startCapacity,
          type: this.type,
        },
        (error) => {
          if (error) {
            console.log(error)
          } else {
            this.$buefy.toast.open({
              duration: 3000,
              message: `Дані успішно змінено`,
              position: "is-bottom",
              type: "is-danger",
            })
          }
        }
      )
    },

    deleteData() {

      try {
         //  console.log("Delete", this.id);
      const db = firebase.database().ref("Battery");
      db.child(this.id)
       .remove()
        
        this.$buefy.toast.open({
            duration: 3000,
            message: `Дані успішно видалено`,
            position: "is-bottom",
            type: "is-danger",
          })
       
       } catch (error) {
          console.log("Remove failed: " + error.message);
        }
    },

    cliCked (e) {
      const val = e.target.innerHTML
      console.log('you clicked on ', val)
      
      if(val==="Замовлення"){
        this.content = true
        this.content_2 = false
      }
      else {
         this.content = false
      }
    },

   

}

}
</script>

<style scoped>
#btn {
  margin-top: 10px;
}
</style>
