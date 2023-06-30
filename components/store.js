import { create } from 'zustand'

const useStore = create((set) => ({
    userCFID: "",
    currentCFID: "",
    username: "",
    setUsername: (name) => set(() => ({ username: name })),
    setUserCFID: (cfid) => set(() => ({ userCFID: cfid })),
    setCurrentCFID: (newCFID) => set(() => ({ currentCFID: newCFID })),
}))

export default useStore