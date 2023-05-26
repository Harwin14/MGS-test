import { defineStore } from 'pinia'
import { api } from './API'

export const useMerchantStore = defineStore({
  id: 'barang',
  state: () => ({
    rawItems: []
  }),
  getters: {
    items: (state) => {
      state.rawItems
    }
  },

  actions: {
    async getUser() {
      const user = localStorage.getItem('username')
      const response = await api.get(`users/find-by-username?username=${user}`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken')
        }
      })
    },
    async loadItem() {
      try {
        const { data } = await api.get('barang/find-all?limit=20&offset=1')

        this.rawItems = [
          ...data.data.map((item) => ({
            id: item.id,
            namaBarang: item.namaBarang,
            harga: item.harga,
            stok: item.stok,
            namaSupplier: item.namaSupplier
          }))
        ]
      } catch (error) {
        console.log('Error load data', error)
      }
    },
    async tambahBarang({ namaBarang, harga, stok, namaSupplier }) {
      this.rawItems.push({ namaBarang, harga, stok, namaSupplier })
      try {
        await api.post('barang/create', { namaBarang, harga, stok, namaSupplier })
      } catch (error) {
        console.log(error)
      }
    },

    async hapusBarang(id) {
      try {
        this.rawItems = this.rawItems.filter((item) => item.id != id)
        await api.delete(`/barang/delete/${id}`)
      } catch (error) {
        console.log(error)
      }
    },
    async updateBarang({ id, namaBarang, harga, stok, supplier }) {
      const { data } = await api.put(`barang/update/${id}`, { namaBarang, harga, stok, supplier })
      try {
        this.rawItems = this.rawItems.map((item) => {
          if (item.id === id) {
            return {
              ...data.data
            }
          }
          return item
        })
      } catch (error) {
        alert('Failed to Updata Data')
        console.log(error)
      }
    }
  }
})
