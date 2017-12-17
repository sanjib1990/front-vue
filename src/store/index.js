import {createStore} from 'vuex'
import CounterStore from '@/components/Counter/CounterStore'

export default createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        counter: CounterStore
    }
})
