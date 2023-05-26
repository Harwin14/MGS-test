<template>
  <div class="container">
    <img alt="Vue logo" class="logo" src="@/assets/logo.png" width="350" height="350" />

    <div class="card">
      <div class="card-header blue-sky"><h2>Register</h2></div>
      <div class="card-body">
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label class="form-label">Username</label>
            <input
              type="text"
              class="form-control"
              v-model="username"
              placeholder="Enter Username"
            />
          </div>
          <div class="form-grou">
            <label class="form-label">Profile Name</label>
            <input
              type="text"
              class="form-control"
              v-model="profileName"
              placeholder="Enter profile name"
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
            <button class="btn blue-sky center">Daftar</button>
            <router-Link to="/login" class="mid">Sudah Punya Akun</router-Link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Register',
  data() {
    return {
      username: '',
      profileName: '',
      password: ''
    }
  },
  methods: {
    async handleSubmit() {
      await axios.post('auth/register', {
        username: this.username,
        profileName: this.profileName,
        password: this.password
      })
      this.$router.push('Login')
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
  height: 390px;
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
.btn {
  border-radius: 10px;
  width: 100px;
  height: 50px;
  padding: 8px;
  margin-top: 6px;
  background: rgb(75, 75, 189);
  cursor: pointer;
}
.btn:hover {
  background: white;
  color: blue;
  border: 1px solid blue;
}
</style>
