<template>
    <div>
<navbar-top/>
<div class="container  ml-2 mt-4 mb-4">
  <img src="../assets/images/furthersofthome.png" alt="Avatar" class="image">
  <div class="overlay">
     <a href="https://furthersofthome.com/index.html"><div class="text">HTML, CSS, VUE, JS, JQuery, NODEJS, EXPRESSJS</div></a>
  </div>
  
</div>
<div class="container  ml-2 mt-4 mb-4">
  <img src="../assets/images/cafeHermanos.png" alt="Avatar" class="image">
  <div class="overlay">
     <a href="https://hermanos-cafe2-38b9a2.netlify.app/#/index"><div class="text">HTML, CSS, NUXTJS, VUEJS, JS, NODEJS, EXPRESSJS, BOOTSTRAPVUE</div></a>
  </div>
  
</div>

<div class="container  ml-2 mt-4 mb-4">
<img src="../assets/images/coinMarketCap.png" alt="Avatar" class="image">
  <div class="overlay">
     <a href="https://github.com/Ahmet-Kirmizi/Working-with-CoinMarketCap-API"> <div class="text">Top 10 Cryptocurrencies of the day    (Python and CoinMarketCap API)</div></a>
  </div>
  
</div>
<div class="container  ml-2 mt-4 mb-4">
  <img src="../assets/images/pongGame.png" alt="Avatar" class="image">
  <div class="overlay">
   <a href="https://github.com/Ahmet-Kirmizi/Pong-Game"> <div class="text">pong game(python)</div></a>
  </div>
  
</div>
<footerbar/>
    </div>
</template>

<script>
import footerbar from "../components/footerbar.vue"
import navbarTop from "../components/navbar.vue";


export default {
  name: "Home",
  components: {
    navbarTop,
    footerbar
  },
};
</script>
<style scoped>
.container {
  position: relative;
  width: 100%;
}

.image {
  display: block;
  width: 100%;
  height: 100%;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: rgba(0, 0, 0, 0.746);
}

.container:hover .overlay {
  opacity: 1;
}

.text {
  color: #fff;
  font-size: 1.5em;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>