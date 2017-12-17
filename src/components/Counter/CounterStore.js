const state = () => ({
    count: 0
})

const mutations = {
    increment(state, count) {
        state.count += count;
    },

    reset(state) {
        state.count = 0;
    }
}

export default ({
    namespaced: true,
    state,
    mutations
})
