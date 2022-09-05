import create from "zustand";
import { persist } from "zustand/middleware";


interface userState {
  user: null | {};
  setUser: (user: ({} | null)) => void
}

const useUserState = create(
  persist<userState>((set) => ({
    user: null,
    setUser: (user) => set((state) => ({ user: user })),
  })
  )
)


export default useUserState;