//获取菜单列表
import { getRole } from "@/request/role"
export default {
    namespaced: true,
    state: {
       rolelist: []
    },
    getters: {
        rolelist: state => state.  rolelist
    },
    mutations: {
        SET_LIST(state, data) {
            state.rolelist = data;
        }
    },
    actions: {
        async get_role_list({commit}) {
            let res = await getRole();
            commit('SET_LIST', res)
        }
    },
}

