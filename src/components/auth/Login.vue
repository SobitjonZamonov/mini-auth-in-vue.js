<template>
    <div class="container">
        <div class="content">
            <h1 class="h-teg">Sign in</h1>
            <hr>
            <div class="inputs">
                <div class="input-e">
                    <label for="username">Username:</label>
                    <input type="text" class="username" v-model="username">
                </div>
                <div class="input-e">
                    <label for="password">Password:</label>
                    <input type="text" class="password" v-model="password">
                </div>
            </div>
            <button @click="loginUser" class="btn">Sign in</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            username: '',
            password: '',
        }
    },
    methods: {
        async loginUser() {
            try {
                const res = await axios.post('http://localhost:3000/auth/signin', {
                    username: this.username,
                    password: this.password
                });
                localStorage.setItem('token', res.data.token);
                alert('Login successful!');
            } catch (error) {
                console.error('Error logging in:', error);
                alert('Failed to login.');
            }
        }
    }
}
</script>

<style>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f5f5f5;
}


.content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 400px;
    height: 400px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
    background-color: #fff;
}


.inputs {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.input-e {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
}
.input-e label {
    font-weight: bold;
    font-size: 16px;
    color: #333;
}

.username {
    width: 280px;
    height: 40px;
    padding: 0 20px;
    border: 1px solid #b6b6b6;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}
.username:focus {
  outline: none;
  border: none;
}


.password {
    width: 280px;
    height: 40px;
    padding: 0 20px;
    border: 1px solid #b6b6b6;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}
.password:focus {
  outline: none;
  border: none;
}


.btn {
    padding: 10px 50px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    font-size: medium;
    margin-top: 40px;
}

</style>