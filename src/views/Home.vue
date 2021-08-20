<template>
  <div>
    <navbar-top />
    <div class="context">
      <h2>Hi, I'm Ahmet</h2>
      <p>
        Welcome to my playground. Here you will find articles, tools, code and
        inspiration.
      </p>
      <p>
        I'm a 17 years old junior Software Engineer with a huge passion for fullstack
        development. I have 2 months experience in the industry working as a
        fullstack developer at FurtherSoft Software in Nicosia, Cyprus. I'm
        currently spending most of my time within the Vue, Nuxt and Node js
        ecosystem.
      </p>
      <h2>Technologies I Use</h2>
      <div>
        <font-awesome-icon :icon="['fab', 'js-square']" class="fa-5x mr-4 mb-4 text-warning" />
        <font-awesome-icon :icon="['fab', 'react']" class="fa-5x m-4 text-primary" />
        <font-awesome-icon :icon="['fab', 'node-js']" class="fa-5x m-4 text-success" />
        <font-awesome-icon :icon="['fab', 'vuejs']" class="fa-5x m-4 text-success" />
        <font-awesome-icon :icon="['fab', 'python']" class="fa-5x m-4 text-primary" />
        <font-awesome-icon :icon="['fab', 'git']" class="fa-5x m-4 text-danger" />

      </div>
      <div class="contact">
        <h3>Let's Make Something Great.</h3>
        <h4>Contact</h4>
        <p>
          I'm seeking out opportunities to collaborate with companies / agencies
          / individuals, not just work for them. I want to bring my collective
          design experience to the table where we can work together to solve
          real business-problems in a way that optimizes all of our respective
          experience and knowledge.
        </p>
        <p>
          I want to avoid subjective pissing-matches, and favor open-minded
          collaborators where egos are out of the equation. If that all sounds
          about right, then lets for sure chat about how we can work together.
        </p>
        <p>Feel free to reach out through any platforms bellow:</p>
        <h1>ahmetk5113@hotmail.com</h1>
        <h1>
          <a
            href="https://www.instagram.com/ahmet__kirmz/"
            class="contactSocial"
            >Instagram</a
          >
        </h1>
        <h1>
          <a href="https://dribbble.com/kirmizi" class="contactSocial"
            >Dribbble</a
          >
        </h1>
        <h1>
          <a href="https://twitter.com/_ahmetk5113_" class="contactSocial"
            >Twitter</a
          >
        </h1>
      </div>
    </div>
    <footerbar />
  </div>
</template>

<script>
import footerbar from "../components/footerbar.vue";
import navbarTop from "../components/navbar.vue";
export default {
  name: "Home",
  components: {
    navbarTop,
    footerbar,
  },
};
</script>
<style scoped>
.contact {
  padding-top: 50px;
  padding-bottom: 100px;
}
a.contactSocial {
  text-decoration: none !important;
  font-size: 20px;
  color: #99f6e4;
  font-weight: 600;
  margin-bottom: 1em;
}

</style>