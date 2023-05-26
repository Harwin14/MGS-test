<template>
  <div class="container">
    <div class="card">
      <div class="card-header blue-sky"><h2>Tambah Barang</h2></div>
      <div class="card-body">
        <form @submit.prevent="handleSubmit">
          <!-- <v-alert :value="error">The Username or the password are incorect</v-alert> -->
          <div class="form-group">
            <label class="form-label">Nama Barang</label>
            <input
              type="text"
              class="form-control"
              v-model="namaBarang"
              placeholder="Masukkan Nama Barang"
            />
          </div>
          <div class="form-group">
            <label class="form-label">Harga Barang</label>
            <input
              type="number"
              class="form-control"
              v-model="harga"
              placeholder="Masukkan Harga Barang"
            />
          </div>
          <div class="form-group">
            <label class="form-label">Stok Barang</label>
            <input
              type="number"
              class="form-control"
              v-model="stok"
              placeholder="Masukkan Jumlah Stok Barang"
            />
          </div>
          <div class="form-group">
            <label class="form-label">Nama Supplier Barang</label>
            <input
              type="text"
              class="form-control"
              v-model="namaSupplier"
              placeholder="Enter Password"
            />
          </div>
          <div class="form-group">
            <label class="form-label">No Tlp Supplier</label>
            <input type="text" class="form-control" v-model="noTelp" placeholder="Enter Password" />
          </div>
          <div class="form-group">
            <label class="form-label">Alamat Supplier</label>
            <input type="text" class="form-control" v-model="alamat" placeholder="Enter Password" />
          </div>
          <div class="card-footer">
            <button class="btn btn-dark center">Kembali</button>
            <button class="btn btn-primary center">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import '../assets/main.css'

export default {
  components: {}
}
</script>
<style scoped>
.container {
  margin: 10% 10%;
  display: flex;
  justify-content: center;
  gap: 6rem;
}

.card {
  width: 600px;
  height: 380px;
  border: 2px solid grey;
  border-radius: 10px;
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
}
</style>
