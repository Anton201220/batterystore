<template>
 <section class="container">
<div class="level-item" v-for="(order) of allOrders" 
   :key="order.id">
<div class="columns is-multiline is-centered cards-container" id="sectioncontainer">

    <div class="column is-narrow">
        <article class="message is-info">
            <div class="message-header">
                <p>{{order.date}}</p>
                <button class="delete" aria-label="delete" v-on:click="deleteOrder(order.id)"></button>
            </div>
            <div class="message-body">
                <div class="board-item">
                    <div class="board-item-content"><span class="main-text">Клієнт: </span><span>{{order.name}}</span></div>
                </div>
                
                <div class="board-item">
                    <div class="board-item-content"><span class="main-text">Телефон: </span><span>{{order.phone}}</span></div>
                </div>
                <div class="board-item">
                    <div class="board-item-content"><span class="main-text">Замовлення: </span><span>{{order.product.manufacturer}} - {{order.product.capacity}}</span></div>
                </div>
            </div>
        </article>
    </div>

    

</div>
</div>
</section>
</template>

<script>

import firebase from "firebase/app"
import "firebase/database"
import 'firebase/firestore'
import { mapGetters } from "vuex"

export default {
  

async mounted() {

this.$store.dispatch('getOrders')

},

computed: mapGetters(["allOrders"]),

methods: {

deleteOrder(id) {

          console.log("Delete", id);
          firebase.firestore().collection('orders')
          .doc(id).delete().then(() => {
        
        this.$buefy.toast.open({
                duration: 3000,
                message: `Дані успішно видалено`,
                position: "is-bottom",
                type: "is-danger",
            })
    
     this.$store.dispatch('getOrders')
    })
     .catch((error) => {
    console.error("Error removing document: ", error);
    })
        
        
}   

}
    
}
</script>


<style scoped>

.level-item {
  margin-bottom: 10px;
}
.main-text{
    font-style: italic ;
    font-weight: 600;
    color: black;
}
</style>