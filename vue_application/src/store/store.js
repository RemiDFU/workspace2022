import { createStore } from 'vuex'

export const store = createStore({
    state: {
        users: [
            {id: 1, username: 'test1', password: ''},
            {id: 2, username: 'test2', password: ''},
            {id: 3, username: 'test3', password: ''},
            {id: 4, username: 'test4', password: ''},
            {id: 5, username: 'test5', password: ''}
        ],
        isLoading: false,
        isAuthenticated: false
    },
    mutations: {},
    actions: {},
});