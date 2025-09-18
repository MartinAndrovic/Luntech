<template>
    <div class="page-layout">
        <header class="navbar">
            <button @click="goToLogout"> logout </button>
        </header>

        <main class="main-content">
            body content
        </main>
    </div>


</template>


<script>
import {useAuthStore} from "../stores/auth.js";

export default {
    name: "Home",

    mounted() {
        this.auth = useAuthStore()
    },
    methods:{
            goToLogout(){
            this.auth.logout()
                .then( () => this.$router.push('/login'))
        }

    }
}
</script>

<style scoped>
.page-layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
}

.navbar {
    height: 60px;
    background-color: #333;
    color: white;
    display: flex;
    align-items: center;
    padding: 0 1rem;
}

.main-content {
    flex: 1;
    overflow-y: auto;
    padding: 1rem;
}

</style>