<template>
  <div class="container">
    <img alt="Vue logo" class="logo" src="@/assets/logo.png" width="350" height="350" />

    <div class="card">
      <div class="card-header blue-sky"><h2>Login</h2></div>
      <div class="card-body">
        <form @submit.prevent="handleSubmit">
          <v-alert v-if="error">The Username or the password are incorect</v-alert>
          <div class="form-group">
            <label class="form-label">Username</label>
            <input
              type="text"
              class="form-control"
              v-model="username"
              placeholder="Enter Username"
            />
          </div>
          <div class="form-group">
            <label class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              v-model="password"
              placeholder="Enter Password"
            />
          </div>
          <div class="card-footer">
            <button class="btn blue-sky center">Masuk</button>
            <router-Link to="/register">Belum Punya Akun</router-Link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  data: () => ({
    username: '',
    password: '',
    error: false
  }),
  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post('auth/login', {
          username: this.username,
          password: this.password
        })
        console.log(response.status)
        if (response.status == 200) {
          localStorage.setItem('accessToken', response.data.data.token)
          localStorage.setItem('user-info', response.data.data.username)
          this.$router.push('/')
        }
      } catch (error) {
        // alert(error.message)
        this.error = true
        console.log(error)
      }
    }
  },
  mounted() {
    let user = localStorage.getItem('user-info')
    if (user) {
      this.$router.push('/')
    }
  }
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
  height: 330px;
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
  margin: 10px;
}
.card-footer {
  margin: 10px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.form-group {
  display: flex;
  flex-direction: column;
}
label {
  font-size: 18px;
}
input {
  width: 550px;
  height: 30px;
  border: 1px solid grey;
  border-radius: 10px;
  margin: 4px;
  padding: 4px;
}
</style>
