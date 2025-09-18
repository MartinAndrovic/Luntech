<template>
    tu sa ides registrovat

    <form @submit.prevent="register">
        <div class="form-group">
            <input id="name" required v-model="name">
            <label for="name"> name </label>
        </div>
        <div class="form-group">
            <input id="mail" type="email" required v-model="mail">
            <label for="mail"> mail </label>
        </div>
        <div class="form-group">
            <input id="password" required v-model="password">
            <label for="password"> password </label>
        </div>
        <div class="form-group">
            <input id="c-password" required v-model="confirmPassword">
            <label for="c-password"> confirm password </label>
        </div>
        <button> login</button>
    </form>

</template>

<script>

export default {
    name: "register",
    data() {
        return {
            mail: '',
            password: '',
            confirmPassword: '',
            name: ''
        }
    },

    methods: {
        async register() {

            axios.get('/sanctum/csrf-cookie')

            axios.post('/register', {
                name: this.name,
                email: this.mail,
                password: this.password
            })
                .then( this.$router.push('/auth/login'))
                .catch(error =>
                    console.error('Login failed:', error.response?.data || error.message)
                )

        },
    }
};
</script>

<style scoped>

.authForm {
    border-bottom: 4px solid;
}

</style>