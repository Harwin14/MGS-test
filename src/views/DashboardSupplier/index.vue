<template>
  <div class="body">
    <Navbar />
    <main class="container">
      <Sidebar />
      <div class="main-dashboard">
        <div class="main-title">
          <h1>Dashboard</h1>
        </div>
        <ListSupplier />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import Footer from '@/components/Footer.vue'
import ListSupplier from '@/components/ListSupplier.vue'

export default {
  name: 'Dashboard',
  components: {
    Navbar,
    Sidebar,
    Footer,
    ListSupplier
  },
  mounted() {
    let user = localStorage.getItem('user-info')
    if (!user) {
      this.$router.push('/login')
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
  height: 800px;
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
  padding: 18px 18px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 220px;
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
  padding: 10px;
}
</style>
