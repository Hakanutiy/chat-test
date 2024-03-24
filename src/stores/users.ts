import { defineStore } from 'pinia'
import axios from "axios";
import { useAuthStore } from "@/stores/userId";
import {useRoute} from "vue-router";

interface IUsers {
    id: number;
    name: string;
    email: string;
    avatar: string
}
export const useUsers = defineStore({
    id: 'users',
    state: () => ({
        users: null as IUsers[],
        companion: null as IUsers
    }),
    getters: {
        usersWithoutMe(state) {
            const { userId } = useAuthStore()
            return state.users.filter(user => user.id !== userId)
        },
        userCompanion(state) {

            return (id: string) => {

                return state.users.find(user => user.id === parseInt(id))

            }
        }
    },
    actions: {
        setUsers(users) {
            this.users = users
        },

        async getUsers() {
            const users = await axios('/users.json')
            this.setUsers(users.data)
        },
        setCompanion(id) {
            const companion = this.userCompanion(id);
            this.companion = companion;

        },

    }
})
