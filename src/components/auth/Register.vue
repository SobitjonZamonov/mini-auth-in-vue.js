<template>
    <v-container class="justify-center align-center" style="min-height: 100vh;">
        <v-card class="pa-6" width="400">
            <v-card-title class="text-h5 font-weight-bold justify-center">
                Sign up
            </v-card-title>

            <v-form ref="form" style="display: flex; flex-direction: column; justify-items: center;">
                <v-card-text>
                    <v-text-field v-model="username" label="Username" outlined dense required></v-text-field>

                    <v-text-field v-model="password" label="Password" type="password" outlined dense
                        required></v-text-field>
                </v-card-text>

                <v-btn @click="registerUser" size="large">
                    Sign up
                </v-btn>
            </v-form>
        </v-card>
    </v-container>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        async registerUser() {
            // Validatsiya qilishni xohlasangiz:
            // if (!this.$refs.form.validate()) return;

            try {
                await axios.post('http://localhost:3000/auth/signup', {
                    username: this.username,
                    password: this.password,
                });
                alert('User registered successfully!');
                this.$router.push('/login');
            } catch (error) {
                console.error('Error registering user:', error);
                alert('Failed to register user. Please try again.');
            }
        },
    },
};
</script>