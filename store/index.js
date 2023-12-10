export const state = () => ({
    lang: 'ru',
    popup: null,
    menu: {
        is_open: false,
        css: '',
    }
})

export const actions = { 
    setLang({commit, state}, data) {
        commit('UPDATE_LANG', data)
    },
    popup({commit, state}, popup){
        this.commit('POPUP_UPDATE', popup);
    },
    async menuToggle({ commit, state }, data) {
        if (typeof data == "boolean") {
            commit('CHANGE_IS_OPEN', data)
        } else {
            commit('CHANGE_IS_OPEN')
        }
    },
    async menuCssClass({ commit, state }, data) {
        commit('UPDATE_MENU_CSS_CLASS', data)
    },
    
}

export const mutations = {
    UPDATE_LANG(state, data) {
        state.lang = data
    },
    POPUP_UPDATE(state, data){
        state.popup = data
    },
    CHANGE_IS_OPEN(state, data) {
        if (typeof data == "boolean") {
            state.menu.is_open = data;
        } else {
            state.menu.is_open = !state.menu.is_open;
        }
    },
    UPDATE_MENU_CSS_CLASS(state, data) {
        state.menu.css = data;
    }
    
}




export const getters = {}
