<template>
    <router-view/>
</template>

<script>

import {useAuthStore} from "./stores/auth.js";
import axiosForToken from "./axiosForToken.js";
export default {
    name: 'App',
    async mounted() {
        const auth = useAuthStore();

        try {
            const response = await axios.get('/user');
            auth.user = response.data;
            console.log('User fetched:', response.data);
            auth.isUserLoading = false

        } catch (e) {
            console.log('User not logged in:', e.response?.status);
            auth.isUserLoading = false
        }

    },

    methods: {

    }
};
</script>
