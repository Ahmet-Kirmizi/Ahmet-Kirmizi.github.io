<template>
  <div>
    <navbar-top />
    <div class="context">
      <div class="RestApi">
        <h5>How to Build a REST API with Express and Mongoose</h5>
        <h6>August 20, 2021</h6>
      </div>
      <div class="RestApiText">
        <h6>
          REST APIs have been around for sometime now. At the time of this
          write-up it is practically impossible for you to be a software
          developer without having to create and use one or more APIs.
        </h6>
        <h6>
          API is an acronym for Application Programming Interface which has
          become an integral part of software development. “It is a set of of
          clearly defined methods of communication between various components”
        </h6>
        <h6>
          REST APIs, on the other hand, are APIs that suit to the REST
          architectural style. REST refers to Representational State Transfer.
        </h6>
        <div class="requirements">
          <h4>Requirements:</h4>
          <p><strong>. NodeJs</strong></p>
          <p><strong>. PostMan</strong></p>
          <p><strong>. MongoDb</strong></p>
        </div>
        <h4>Installing ExpressJs:</h4>
        <h6>npm install express --save</h6>
        <div class="install"></div>
        <h4>Installing Mongoose:</h4>
        <h6>npm install mongoose --save</h6>
        <div class="instructions">
          <h4>Instructions</h4>
          <h6>Create a file called index.js</h6>
          <img
            src="../assets/images/RestApiFile.png"
            alt="file location"
            class="mt-4 mb-4"
          />
          <h4>Then Add This Code:</h4>
          <img src="../assets/images/RestApiIndex.png" alt="index.js" width="900" height="900" class="mt-4 mb-4">
          <p>Yayyy we have a working Express Server Now, Let's Add some routes to do CRUD Operations.</p>
          <h4>Mongoose Schema:</h4>
          <img src="../assets/images/RestApiSchema.png" alt="mongoose schema"  width="900" height="900" class="mt-4 mb-4">
          <h4>Routes:</h4>
          <p>Get All Customer İnformation</p>
          <img src="../assets/images/RestApiRoute.png" alt="mongoose schema"  width="900" height="900" class="mt-4 mb-4">
          <h6>first we create a router object using <code>express.Router()</code> , Then we create an async get method to get all customer information from the database.We send our data using the <code>res</code>  parameter defined in the  <code> async function</code></h6>
          <h4>Thanks For Reading My Blog :)</h4>
        </div>
      </div>
    </div>
    <footerbar />
  </div>
</template>

<script>
import navbarTop from "../components/navbar.vue";
import footerbar from "../components/footerbar.vue";

export default {
  name: "RestApi",
  components: {
    navbarTop,
    footerbar,
  },
};
</script>
<style scoped>
.RestApi {
  text-align: center;
}
.RestApiText {
  margin-top: 5em;
}
.requirements {
  margin-top: 3em;
  margin-bottom: 3em;
}
.instructions {
  margin-top: 3em;
}
.install{
    margin-top: 3em;
}
@media only screen and (max-width: 380px) {
  img{
    width: 80vw;
    height: auto;
  }  
}
</style>