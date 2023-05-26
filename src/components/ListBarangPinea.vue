<template>
  <div class="title">
    <h2>Barang</h2>
    <router-link to="/addBarang" class="btn-lg">Tambah Barang</router-link>
  </div>
  <div class="table-wrapper">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>No</th>
          <th>Nama Barang</th>
          <th>Stock</th>
          <th>Harga</th>
          <th>Nama Supplier</th>
          <th>Alamat Supplier</th>
          <th>No Telp Supplier</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <ItemBarang v-for="(product, index) in products" :no="index" :key="product.id" />
      </tbody>
    </table>
  </div>
</template>

<script setup>
import ItemBarang from './ItemBarang.vue'

defineProps({
  products: {
    type: Object,
    required: true
  }
})
</script>

<style></style>
