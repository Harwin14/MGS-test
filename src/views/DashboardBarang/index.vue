<template>
  <div class="body">
    <Navbar />
    <main class="container">
      <!-- ====START Card-===== -->
      <div class="card-wrapper">
        <div class="profil-wrapper">
          <img src="@/assets/user.png" alt="" class="user-img" width="200px" height="200px" />
          <div class="profil-user">
            <span>
              {{ user.profileName }}
            </span>
          </div>
        </div>

        <div class="menu-wrapper">
          <div class="card-menu">
            <span>Menu</span>
            <div class="menu-list">
              <router-link type="button" to="/" class="btn-menu">Barang</router-link>
              <router-link to="/supplier" class="btn-menu active"> Supplier </router-link>
            </div>
          </div>
        </div>

        <div class="status-wrapper">
          <h2>
            Online &nbsp; <font-awesome-icon icon="fa-solid fa-circle" style="color: #128e10" />
          </h2>
          <div class="status">
            <div class="group2">
              <span class="status1">hari online &nbsp;</span>
              <span class="status2"> : {{ date }}</span>
            </div>
            <div class="group2">
              <span class="status3">waktu online </span>
              <span class="status4"> : {{ timestamp }} &nbsp;&nbsp;&nbsp;</span>
            </div>
          </div>
        </div>
      </div>
      <!-- ====END Card-===== -->
      <div class="main-dashboard">
        <div class="main-title">
          <h1>Dashboard</h1>
        </div>
        <ListBarang />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import axios from 'axios'
import Navbar from '../../components/Navbar.vue'
import Footer from '../../components/Footer.vue'
import ListBarang from '../../components/ListBarang.vue'

export default {
  name: 'Dashboard',
  components: {
    Navbar: Navbar,
    Footer: Footer,
    ListBarang: ListBarang
  },
  data() {
    return {
      user: '',
      timestamp: ''
    }
  },
  async created() {
    const user = localStorage.getItem('user-info')
    const response = await axios.get(`users/find-by-username?username=${user}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('accessToken')
      }
    })
    this.user = response.data.data
  },
  mounted() {
    let user = localStorage.getItem('user-info')
    if (!user) {
      this.$router.push('/login')
    }
    setInterval(
      function () {
        this.getNow()
      }.bind(this),
      1000
    )
  },
  methods: {
    getNow: function () {
      const today = new Date()
      const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
      const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
      const dateTime = time
      this.timestamp = dateTime
      this.date = date
    }
  }
}
</script>

<style>
.body {
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
  height: 900px;
}
.container {
  display: flex;
  gap: 1rem;
  padding: 1rem;
}
.main-dashboard {
  width: 100%;
  border: 2px solid grey;
  border-radius: 5px;
  box-shadow: var(--shadow);
  margin-right: 20px;
}

.main-title {
  background: var(--primary);
  padding: 10px;
}
.main-dashboard h2 {
  padding: 10px;
}

/* ====================== */
.card-wrapper {
  width: 300px;
  height: 100vh;
}
.profil-wrapper {
  border-radius: 5px;
  border: 1px solid grey;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: var(--shadow);
}
.user-img {
  width: 200px;
  height: 200px;
  margin-bottom: 10px;
}
.profil-user {
  width: 100%;
  height: 50px;
  font-size: 30px;
  background: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
}
.menu-wrapper {
  border-radius: 5px;
  border: 1px solid grey;
  margin-bottom: 10px;
  box-shadow: var(--shadow);
}
.menu-wrapper span {
  width: 100%;
  height: 50px;
  font-size: 25px;
  background: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-menu {
  background: var(--primary);
  box-shadow: var(--shadow);
}
.menu-list {
  background: #fff;
  display: flex;
  flex-direction: column;
  margin: 0;
}
.menu-list h4 {
  border: 1px solid grey;
  padding: 10px;
  cursor: pointer;
}
.menu-list h4:hover {
  background: rgb(78, 78, 184);
}
.menu:active {
  background: blue;
}
.status-wrapper {
  border-radius: 8px;
  border: 1px solid grey;
  margin-bottom: 10px;
  box-shadow: var(--shadow);
}
.status-wrapper h2 {
  background: var(--primary);
  font-style: none;
  font-size: 20px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.status {
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
} 
.group {
  display: flex; 
  gap: 4rem;
}
</style>
