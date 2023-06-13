import { create } from 'zustand'

const useStore = create((set) => ({
    username: "yuvraj loda",
    setUsername: (newUsername) => set(() => ({ username: newUsername })),
}))

export default useStore