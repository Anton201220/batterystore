<template>
<tbody>

   <tr v-for="(product, index) of allProducts" 
   :key="index">
      <td width="5%"><i class="fa fa-bell-o"></i></td>
      <td>{{product.id}}</td>
      <td class="level-right"><button class="is-small is-primary" v-on:click="editData(product.id)">Редагувати</button></td>
    </tr>
</tbody>
</template>

<script>

import { mapGetters } from "vuex"

export default {
  
   
 computed: mapGetters(["allProducts"]),

  async mounted() {

  this.$store.dispatch('getDataFromDb')
    
  },

   methods: {
       editData(id) {
        // console.log("Edit", id);
         this.$store.dispatch('fetchProductById', id)
       }
   }
}
</script>