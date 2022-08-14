<template>
  <div class="columns">
    <SideBar class="column is-one-quarter" />
    <ProductsList
      class="column is-three-quarters"
      v-if="allProducts.length"
      v-bind:products="allProducts"
    />
    <!-- <h1 id="txt" class="has-text-centered is-italic" v-else>
      Товар тичасово відсутній
    </h1> -->
    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>

  </div>
</template>

<script>
import SideBar from "./SideBar"
import ProductsList from "./ProductsList"
import { mapGetters, mapActions } from "vuex"

export default {

  components: {
    SideBar,
    ProductsList,
  },

  computed: mapGetters(["allProducts"]),
  methods: mapActions(["getDataFromDb"]),
  
  mounted() {
    // console.log(this.allProducts);
    this.getDataFromDb()
  },
}

</script>

<style scoped>
#txt {
  margin-top: 20%;
  margin-left: 25%;
}
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 330px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #44cf25;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }

}

</style>