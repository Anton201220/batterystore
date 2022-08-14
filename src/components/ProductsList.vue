<template>
<div>
    <h1 class="has-text-centered is-size-1 is-italic">Каталог батарей</h1><br>
    <div class='columns is-multiline'> 
    <ProductItem
    v-for="product of products"
    :key="product.id"
    :prod="product"/>
    </div>

</div>
</template>

<script>
import ProductItem from '../components/ProductItem'

export default {
  
  components: {
  ProductItem
  },
  
  props:['products'],
}
</script>
