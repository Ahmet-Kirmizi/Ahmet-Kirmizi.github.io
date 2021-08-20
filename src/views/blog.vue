<template>
  <div>
    <navbar-top />
    <div class="context">
      <h5>Blog Posts</h5>
      <div class="blogPost">
        <router-link to="/RestApi">
          <h4>
            How to Build a REST API with Express and Mongoose
          </h4></router-link
        >
        <h6>August 20, 2021 . 8 min read . NodeJs</h6>
        <h6>
          This tutorial will guide you to build a REST API with Node.js,
          Express, and Mongoose with CRUD functionalities.
        </h6>
      </div>
    </div>
    <footerbar />
  </div>
</template>
<script>
import navbarTop from "../components/navbar.vue";
import footerbar from "../components/footerbar.vue";

export default {
  name: "blog",
  components: {
    navbarTop,
    footerbar,
  },
};
</script>
<style scoped>
.blogPost {
  margin-top: 3em;
  margin-right: 10em;
  margin-bottom: 33em;
}
@media only screen and (max-width: 380px) {
  h4{
    font-size: 25px;
    text-align: left;
  }
  h6{
    text-align: left;
    margin-top: 1em;
  }
  .blogPost{
    display:inline-block;
  }
}
</style>