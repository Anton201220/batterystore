<template>

<section class="hero is-fullheight is-default is-bold">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="columns is-vcentered">
                    <div class="column is-6">
                       <GmapMap
      :center='center'
      :zoom='18'
      style='width:100%;  height: 400px;'
    />
                    </div>
                    
                    <div class="column is-6 is-offset-1">
          <div class="category">
            <h1 class="title is-5">
              Про нас
            </h1>
            <hr/>
            <ul>
              <li>
                <i class="fas fa-caret-right fa-xs icon-padding-right"></i>
                Наша адреса - вул.Поліська 2, Львів,'Авторинок'
              </li>
              <li>
                <i class="fas fa-caret-right fa-xs icon-padding-right"></i>
                Телефони
              </li>
              <li>
                <i class="fas fa-caret-right fa-xs icon-padding-right"></i>
                 тел. 0636824507 Антон<br/>
                 тел. 0936977726 Сергій
              </li>
              <li>
                <i class="fas fa-caret-right fa-xs icon-padding-right"></i>
                Viber 0936977726
                      0636824507
              </li>
               <li>
                <i class="fas fa-caret-right fa-xs icon-padding-right"></i>
                Telegram 0936977726
              </li>
            </ul>
          </div>
        </div>
                    </div>
                </div>
            </div> 
         </section>
</template>

<script>
export default {

  name: "About",
  
  data() {
    return {
      center: { lat: 49.875237, lng: 24.06498 },
    }
  },
}

</script>