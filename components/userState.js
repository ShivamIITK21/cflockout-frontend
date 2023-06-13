import { create } from 'zustand'

const userState = create((set) => ({
    username: "",
    setUsername: (newUsername) => set(() => ({ username: newUsername })),
}))

export default userState