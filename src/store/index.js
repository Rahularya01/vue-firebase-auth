import { createStore } from 'vuex'

// firebase imports
import { auth } from '../../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default createStore({
    state: {
        user: null,
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
            console.log('user state changed: ', state.user);
        }
    },
    actions: {
        async signup(context, { email, password }) {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            if (res) {
                context.commit('setUser', res.user);
            } else {
                throw new Error('Could not complete signup');
            }
        }
    },
    modules: {}
})