<template>
  <nav>
    <div class="nav-title">
      <h3>MARKETPLACE</h3>
      <img alt="Vue logo" class="logo" src="@/assets/logo-remove.png" width="100" height="70" />
    </div>
    <div class="left">
      <div class="logout">
        <font-awesome-icon icon="fa-solid fa-right-from-bracket" />
        <a href="#" @click="logout">Logout</a>
      </div>
      <font-awesome-icon icon="fa-solid fa-bars" class="icon" />
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  components: {},
  methods: {
    logout() {
      localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
nav {
  display: flex;
  background: var(--primary);
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem 0 0.5rem;
}

nav .icon {
  height: 35px;
  border: 1px solid grey;
  padding: 0.5rem;
  border-radius: 20%;
}
nav .icon:hover {
  color: blue;
  border-color: blue;
  cursor: pointer;
  background: white;
}
.nav-title {
  font-size: 25px;
  display: flex;
  align-items: center;
}
.left {
  display: flex;
  gap: 2rem;
}
.logout {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: black;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid black;
}
.logout a {
  color: black;
}
.logout a:hover {
  color: blue;
}
.logout:hover {
  color: blue;
  border-color: blue;
  cursor: pointer;
  background: white;
}
</style>
