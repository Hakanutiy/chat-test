import { defineStore } from 'pinia'

interface IAuthState {
    userId: number;
    companionId?: number

}
export const useAuthStore = defineStore({
    id: 'userId',
    state: ():IAuthState => ({
        userId: null,
        companionId: null
    }),
    getters: {
        isAuth(state) {
            return !!state.userId
        },

    },
    actions: {
        setUserID(userId) {
            this.userId = userId
        },
        setCompanionId(companionId) {
            debugger
            this.companionId = companionId
        }
    }
})