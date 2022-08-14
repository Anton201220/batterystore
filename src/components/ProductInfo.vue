<template>
    <section class="section" id="about">
    <div class="columns has-same-height is-gapless">
      <div class="column">
        <!-- Profile -->
        <div class="card">
          <div class="card-content">
            <h3 class="title is-4">Деталі</h3>

            <div class="content">
              <table class="table-profile">
                <tr>
                  <th colspan="1"></th>
                  <th colspan="2"></th>
                </tr>
                <tr>
                  <td class="is-italic">Плюсова схема</td>
                  <td>{{product.plusScheme}}</td>
                </tr>
                <tr>
                  <td class="is-italic">Розміри:</td>
                  <td>{{product.size}}</td>
                </tr>
                <tr>
                  <td class="is-italic">Тип:</td>
                  <td>{{product.type}}</td>
                </tr>
              </table>
            </div>
            <br>
            <div class="buttons has-addons is-centered">
               <router-link  class="button  is-link" :to="{ name: 'order', params: {id} }">Замовити</router-link>
              <router-link id="bt3" class="button is-link" to="/">На головну</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <!-- Profile picture -->
        <div class="card has-text-centered">
          <p class="title is-4">{{product.manufacturer}}</p>
          <div class="card-image">
            <figure class="image is-4by3">
              <img :src=product.imgUrl alt="Placeholder image">
            </figure>
          </div>
        </div>
      </div>
      <div class="column">
        <!-- Skills -->
        <div class="card">
          <div class="card-content skills-content">
            <div class="content">

              <article class="media">
                <div class="media-content">
                  <div class="content">
                    <p class="is-italic">Зроблено в:</p>
                    <p>
                      <strong>{{product.countryOrigin}}</strong>
                      <br>
                      <progress class="progress is-primary" value="90" max="100"></progress>
                    </p>
                  </div>
                </div>
              </article>

              <article class="media">
                <div class="media-content">
                  <div class="content">
                    <p class="is-italic">Ємність батареї:</p>
                    <p>
                      <strong>{{product.capacity}}</strong>
                      <br>
                      <progress class="progress is-primary" value="90" max="100"></progress>
                    </p>
                  </div>
                </div>
              </article>

              <article class="media">
                <div class="media-content">
                  <div class="content">
                    <p class="is-italic">Стартовий струм</p>
                    <p>
                      <strong>{{product.startCapacity}}</strong>
                      <br>
                      <progress class="progress is-primary" value="75" max="100"></progress>
                    </p>
                  </div>
                </div>
              </article>

              <article class="media">
                <div class="media-content">
                  <div class="content">
                    <p class="is-italic">Ціна</p>
                    <p>
                      <strong>{{product.price}} грн</strong>
                      <br>
                      <progress class="progress is-primary" value="95" max="100"></progress>
                    </p>
                  </div>
                </div>
              </article>

              </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
</template>

<script>

export default {

  props:['prod'],
 
 data: () => ({
    product: '',
    id:''
  }),
 
 created() {
    this.id = this.$route.params.prod
  // console.log('Selected product', this.id);
  },
  
  
  async mounted() {
    try {
      this.product = await  this.$store.dispatch('fetchProductById', this.$route.params.prod)
      
      //console.log('ProductInfo', this.product);
    
    } catch (e) {
      console.log(e)
    }
  }

}

</script>

<style scoped>

#bt3{
  margin-left: 3px;
}
</style>
