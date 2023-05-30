<template>
  <div class="body">
    <Navbar :name="name" @changeName="ubahNama"/>
    <main class="container">
      <Sidebar />
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
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Sidebar from '@/components/Sidebar.vue'
import ListBarang from '@/components/ListBarang.vue'

export default {
  name: 'Dashboard',
  components: {
    Navbar,
    Footer,
    Sidebar,
    ListBarang
  },
  data() {
    return {
      name: 'Agung Harwin',
      isEdit: false
    }
  },
  methods: {
    ubahNama(namaBaru){
      this.name = namaBaru
    },
    handleEdit() {
      this.isEdit = true
    },
    handleCancel() {
      this.isEdit = false
    }
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
</style>
