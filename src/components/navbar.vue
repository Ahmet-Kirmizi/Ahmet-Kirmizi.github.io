    <template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light navbarMain">
      <div class="container-fluid">
        <div class="navbar-nav">
          <router-link class="nav-link activetext" aria-current="page" to='/'>HOME</router-link>
          <div class="navbarBlog ml-3">
            <router-link class="nav-link navbarlinks" to="/blog">BLOG</router-link>
          </div>
          <div class="ml-3">
            <router-link class="nav-link navbarlinks" to="/about">ABOUT</router-link>
          </div>      
          <div class="ml-3">
            <router-link class="nav-link navbarlinks" to="/portfolio">PORTFOLIO</router-link>
          </div>

        </div>
        <div class="float-right nav-icons">
          <a href="https://github.com/Ahmet-Kirmizi"><font-awesome-icon :icon="['fab', 'github']" class="fa-lg m-2 text-light" /></a>
          <a href="https://twitter.com/_ahmetk5113_"><font-awesome-icon :icon="['fab', 'twitter']" class="fa-lg m-2 text-light" /></a>
          <a href="https://www.linkedin.com/in/ahmet-kirmizi-00962920b/"><font-awesome-icon :icon="['fab', 'linkedin']" class="fa-lg m-2 text-light" /></a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: "navbarTop",
};
</script>
<style scoped>
@media only screen and (max-width: 540px) {
div.navbar-nav{
  flex-direction: row;
}
div.float-right.nav-icons{
display: none;

}
.navbar-nav a.activetext {
    border-bottom: 1px solid #1a202c;
 
}
}

</style>