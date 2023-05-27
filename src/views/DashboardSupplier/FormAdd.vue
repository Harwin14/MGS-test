<template>
  <div class="body">
    <Navbar />
    <div class="container">
      <div class="card">
        <div class="card-header blue-sky"><h2>Tambah Supplier</h2></div>
        <div class="card-body">
          <form @submit.prevent="handleSubmit">
            <!-- <v-alert :value="error">The Username or the password are incorect</v-alert> -->
            <div class="form-group">
              <label class="form-label">Nama Supplier</label>
              <input
                type="text"
                class="form-control"
                v-model="namaSupplier"
                placeholder="Masukkan Nama Supplier"
                required
              />
            </div>
            <div class="form-group">
              <label class="form-label">Alamat Supplier</label>
              <input
                type="text"
                class="form-control"
                v-model="alamat"
                placeholder="Masukkan Alamat Supplier"
                required
              />
            </div>
            <div class="form-group">
              <label class="form-label">No Telepon Supplier</label>
              <input
                type="tel"
                class="form-control"
                v-model="noTelp"
                placeholder="Masukkan No Telp Supplier"
                required
              />
            </div>
            <div class="card-footer">
              <router-link to="/supplier" class="btn btn-dark">Kembali</router-link>
              <button class="btn btn-primary center">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../../components/Navbar.vue'
import Footer from '../../components/Footer.vue'
import axios from 'axios'

export default {
  name: 'FormAdd',
  components: {
    Navbar: Navbar,
    Footer: Footer
  },
  data: () => ({
    namaSupplier: '',
    alamat: '',
    noTelp: ''
  }),
  mounted() {
    let user = localStorage.getItem('user-info')
    if (!user) {
      this.$router.push('/login')
    }
  },
  methods: {
    async handleSubmit() {
      try {
        await axios.post(
          'supplier/create',
          {
            namaSupplier: this.namaSupplier,
            alamat: this.alamat,
            noTelp: this.noTelp
          },
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('accessToken')
            }
          }
        )
        this.$router.push('/supplier')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
<style scoped>
.container {
  display: flex;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
}

.card {
  width: 600px;
  height: 330px;
  border: 2px solid grey;
  border-radius: 10px;
  box-shadow: var(--shadow);
}
.card-header {
  width: 600px;
  height: 50px;
  border-bottom: 1px solid grey;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--primary);
}
.card-body {
  margin: 10px 0;
}
.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid grey;
  padding: 10px;
}
.form-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2px 10px;
}
label {
  font-size: 18px;
}
input {
  width: 350px;
  height: 30px;
  border: 1px solid grey;
  border-radius: 10px;
  margin: 4px;
  padding: 4px;
  font-size: 16px;
}
.btn {
  border-radius: 10px;
  width: 100px;
  height: 50px;
  padding: 8px;
  margin-top: 6px;
  cursor: pointer;
  color: white;
  font-size: 17px;
}
.btn:hover {
  background: white;
  color: blue;
  border: 1px solid blue;
}
.btn-primary {
  background: rgb(57, 57, 180);
}
.btn-dark {
  background: rgb(74, 74, 75);
  border-radius: 10px;
  width: 100px;
  height: 33px;
  padding: 8px;
  margin-top: 6px;
  cursor: pointer;
  color: white;
  font-size: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
