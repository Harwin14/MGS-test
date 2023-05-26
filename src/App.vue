<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <!-- <HelloWorld msg="You did it!" /> -->

      <nav>
        <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->
        <!-- <RouterLink to="/login">login</RouterLink> -->
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
* {
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
  outline: none;
  border: none;
  text-decoration: none;
}
html {
  height: 100%;
}

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,700&display=swap');

body {

  font-family: 'Poppins', sans-serif;
}
:root {
  --primary: rgb(133, 165, 235);
  --blue: rgb(38, 75, 155);
  --shadow: -1px 5px 22px -2px rgba(0, 0, 0, 0.71);
}

.btn {
  border-radius: 10px;
  width: 100px;
  height: 50px;
  padding: 8px;
  margin-top: 6px;
  background: rgb(75, 75, 189);
  cursor: pointer;
}
.btn:hover {
  background: #fff;
  color: blue;
  border: 1px solid blue;
}
.btn-menu {
  width: 100%;
  height: 30px;
  padding: 8px;
  background: #fff;
  cursor: pointer;
  color: black;
}
/* .btn-menu:hover {
  background: rgb(32, 78, 175);
  color: #fff;
} */
.btn-menu:focus{
  background:  rgb(32, 78, 175);
}
.active:focus{
  background:  rgb(32, 78, 175);
}
.btn-lg {
  width: 150px;
  height: 50px;
  margin: 6px -10px;
  background: var(--blue);
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-size: 1rem;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
}
.btn-lg:hover {
  background: #fff;
  color: black;
  border: 1px solid blue;
}
</style>
