<template>
    <form @submit.prevent="login">
        <div class="form-group">
            <input id="mail" type="email" required v-model="mail">
            <label for="mail"> mail </label>
        </div>
        <div class="form-group">
            <input id="password" required v-model="password">
            <label for="password"> password </label>
        </div>
        <button> login</button>
    </form>

    <div @click="goToRegistration"> register</div>

</template>

<script>
import {useAuthStore} from "@/stores/auth";

export default {
    name: "login",
    mounted() {
        this.auth = useAuthStore()
    },
    data() {
        return {
            mail: '',
            password: ''
        }
    },

    methods: {

        login() {
            this.auth.login(this.mail, this.password)
                .then(() => this.$router.push('/'), console.log('je na /'))
                .catch(e => console.log('nejdem', e))
        },

        goToRegistration() {
            this.$router.push('/auth/register')
        }
    }
}
;
</script>

<style>


.form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}

label {
    margin-left: 0.3rem;
}
</style>