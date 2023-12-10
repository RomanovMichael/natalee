

export const state = () => ({
    currentTheme: {
      mod: 1
    },
    colorMods: [
        {
            modId: 1,
            modName: 'Dark',
            modCssClass: '--theme-dark',
        },
        {
            modId: 2,
            modName: 'Light',
            modCssClass: '--theme-light',
        }
    ]
})

export const actions = { 
    setColorTheme({commit, state}) {
        console.log('saaa');
        commit('SET_COLOR_THEME_MOD', state.currentTheme.mod === 1 ? 2 : 1);
    }
}

export const mutations = { 
    SET_COLOR_THEME_MOD(state, data) {
        state.currentTheme.mod = data;
    }
}

export const getters = {
}