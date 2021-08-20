<template>
  <div>
    <navbar-top />
    <div class="context">
      <div class="about">
        <h5 class="mb-2">About</h5>
        <h6 >I build Web applications</h6>
        <div class="aboutText">
          <h6>
            I'm a 17 year old self taught developer. I study in Türk Maarif
            Kolleji in Nicosia, Cyprus. Mainly I work as a Fullstack Developer.
            I'm also a staff at Step Out camping club. I've been working with
            software development since 2019. I love what I do and I thrive when
            I get to work with great people on a fun project. I'm passionate
            about my profession and love to help others succeed.
          </h6>
          <h6>Oh and I love metal music, it keeps me awake!</h6>
        </div>
      </div>
      <div class="abouttech">
        <h2>Tech Behind This Site</h2>
        <h6>This site is built with <strong> VueJs</strong>, <strong>CSS</strong>, <strong>VueBootstrap</strong> and hosted on <strong>Github Pages</strong>.</h6>
      </div>
      <div class="about mb-5">
          <img src="../assets/images/programmer.png"  alt="programmer">
      </div>
    </div>
    <footerbar />
  </div>
</template>

<script>
import navbarTop from "../components/navbar.vue";
import footerbar from "../components/footerbar.vue";

export default {
  name: "about",
  components: {
    navbarTop,
    footerbar,
  },
};
</script>
<style scoped>
.about {
  padding-top: 50px;
  text-align: center;
}
.aboutText{
    padding-top: 50px;
}
.abouttech{
    margin-top: 3em;
}
@media only screen and (max-width: 380px) {
img{
  width: 33vh;
  height: auto;
}
}

</style>