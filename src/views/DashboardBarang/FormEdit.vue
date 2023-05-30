<template>
  <div class="body">
    <Navbar />
    <div class="container">
      <div class="card">
        <div class="card-header blue-sky"><h2>Update Barang</h2></div>
        <div class="card-body">
          <form>
            <div class="form-group">
              <label class="form-label">Nama Barang</label>
              <input
                type="text"
                class="form-control"
                v-model="barang.namaBarang"
                placeholder="Masukkan Nama Barang"
              />
            </div>
            <div class="form-group">
              <label class="form-label">Harga Barang</label>
              <input
                type="text"
                class="form-control"
                v-model="barang.harga"
                placeholder="Masukkan Harga Barang"
              />
            </div>
            <div class="form-group">
              <label class="form-label">Stok Barang</label>
              <input
                type="text"
                class="form-control"
                v-model="barang.stok"
                placeholder="Masukkan Jumlah Stok Barang"
              />
            </div>
            <div class="form-group">
              <label class="form-label">Supplier Barang</label>
              <select class="form-control" v-model="barang.supplier" @change="onChange($event)">
                <option value="">Choose Supplier...</option>
                <option v-for="item in suppliers" :key="item.id" :value="item">
                  {{ item.namaSupplier }}
                </option>
              </select>
            </div>
            <div class="card-footer">
              <router-link to="/" class="btn btn-dark">Kembali</router-link>
              <button type="button" class="btn btn-primary" @click="updateBarang">Simpan</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import axios from 'axios'

export default {
  name: 'FormEdit',
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      barang: {
        namaBarang: '',
        harga: '',
        stok: ''
      },
      supplier: '',
      suppliers: {},
      onChange(e) {
        this.val = e.target.value
      }
    }
  },
  async mounted() {
    let user = localStorage.getItem('user-info')
    if (!user) {
      this.$router.push('/login')
    }
    const response = await axios.get(`barang/find-by-id/${this.$route.params.id}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('accessToken')
      }
    })
    const result = await axios.get('supplier/find-all?limit=20&offset=1', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('accessToken')
      }
    })
    this.suppliers = result.data.data
    this.barang = response.data.data
  },
  methods: {
    async updateBarang() {
      try {
        await axios.put(
          `barang/update/${this.$route.params.id}`,
          {
            namaBarang: this.barang.namaBarang,
            harga: this.barang.harga,
            stok: this.barang.stok,
            supplier: {
              id: this.barang.supplier.id,
              namaSupplier: this.barang.supplier.namaSupplier,
              noTelp: this.barang.supplier.noTelp,
              alamat: this.barang.supplier.alamat
            }
          },
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('accessToken')
            }
          }
        )
        // console.log(this.barang.supplier.namaSupplier)
        this.$router.push('/')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
<style scoped>
.body {
  margin-top: -48px;
}
.container {
  display: flex;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
}

.card {
  width: 600px;
  height: 470px;
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
select {
  width: 360px;
  height: 30px;
  border: 1px solid grey;
  border-radius: 10px;
  margin: 4px;
  padding: 4px;
  font-size: 16px;
}
</style>
