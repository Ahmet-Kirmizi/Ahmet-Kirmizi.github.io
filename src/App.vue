<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
/* copyright to langadev for the theme */

::-webkit-scrollbar {
  display: none;
  visibility: hidden;
  opacity: 0;
}
body {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #1a202c;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  max-width: 900px;
  margin: 0 auto;
  background: var(--bg-color);
  font-family: var(--font-family);
}
:root {
  --bg-color: #1a202c;
  --font-family: Montserrat, sans-serif;
}
h1{
  font-size : 20px;
  color: #99f6e4;
  font-weight: 600;
  margin-bottom: 1em;
}

h2 {
  font-size: 180%;
  transform: translateX(-5px);
  margin-bottom: 0;
  font-size: 36px;
  color: #99f6e4;
  font-weight: 600;
}
h3 {
  font-size: 60px;
  margin-bottom: 0.5em;
  color: #ffff;
  font-weight: 600;
}
h3:hover{
  color: #99f6e4;
}
p {
  margin-bottom: 1.5em;
  font-size: 20px !important;
}
h4{
  font-size: 30px;
  margin-bottom: 0.5em;
  color: #ffff;
  font-weight: 600;
}
h4:hover{
  color: #99f6e4;
}
h5{
  font-size: 180%;
  transform: translateX(-5px);
  font-size: 50px;
  color: #99f6e4;
  font-weight: 600;
}
h6{
  font-size: 20px;
  margin-bottom: 0.5em;
  color: #CBD5E0;

}
strong {
  margin-left: 0.2em;
  display: inline-block;
  transform: translateX(-5px);
  font-size: 120%;
  line-height: 1;
  font-family: var(--font-display);
}
div.container-fluid{
  margin-top: 0.5em;
}
h2:after {
  content: "";
  display: block;
  height: 8px;
  max-width: 55px;
  transform: skewX(-21deg) translateY(-13px);
  border-radius: 3px;
}
nav {
  font-family: var(--font-family) !important;
  padding-bottom: 1000px;
  width: 100%;
  /*box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);*/
}
.navbar a {
  color: #cbd5e0 !important;
}
a.nav-link {
  font-weight: 600;
}
footer {
  color: white;
  margin-top: auto;
}
.navbar-nav a.activetext:hover {
    border-bottom: 2px solid #99f6e4;

}

a.navbar-brand {
  background-color: transparent;
  color: #99f6e4 !important;
  font-weight: 600;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: Montserrat, sans-serif;
}
.context {
  padding-top: 50px;
  padding-left: 30px;
}
p {
  font-size: 18px;
  color: #ffff;
}
.nav-link {
  padding: 0 !important;
}

.navbarlinks:hover {
  border-bottom: 2px solid #99f6e4;
}
.nav-icons {
  color: white !important;
}
div.float-right.nav-icons:hover {
  color: #99f6e4 !important;
}
</style>
