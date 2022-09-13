import { createApp } from 'vue'
import { createStore } from 'vuex'

class Users {
    public mail: string;
    public id: string;
    public password: string;
    public constructor(mail: string, id: string, password: string) {
        this.mail = mail;
        this.id = id;
        this.password = password;
    }
}
// Create a new store instance.
const store = createStore({
    state() {
        return {
            count: 0
        }
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
})


const app = createApp({})

// Install the store instance as a plugin
app.use(store)