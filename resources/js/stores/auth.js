import {defineStore} from 'pinia';

export const useAuthStore = defineStore('user', {
    state: () => ({
        user: null,
        isUserLoading: true,
    }),

    getters: {
        isLoggedIn: (state) => !!state.user,
    },

    actions: {

        login(mail, password) {
            return axios.get('/sanctum/csrf-cookie').then(() => {
                axios.post('/login', {
                        email: mail,
                        password: password
                    },
                )
                    .then(response => {
                        console.log('v store bol login')
                        this.user = response.data.user;
                        return response;
                    })
                    .catch(error => console.log(error)
                    );
            });
        },


        logout() {
            return axios.post('/logout')
                .then(() => this.user = null)
                .catch(e => console.log(e))
        },
    },

    persists: true
})