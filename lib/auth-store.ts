import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export type User = {
  name: string;
  email: string;
};

export type State = {
  user: User | null;
  token: string
};

export type Actions = {
  setUserAuth: ({ name, email }: User) => void;
  setTokenAuth: (tokenString: string) => void;
};

const useAuth = create<State & Actions>()(
  devtools(
    persist(
      (set) => ({
          user: null,
          token: '',
          setUserAuth: ({ name, email }) =>
            set(() => ({
              user: { name, email },
            })),
          setTokenAuth: (tokenString) =>
            set(() => ({
              token: tokenString
            }))
        }),
      { name: 'authStore' },
    ),
  ),
)

export default useAuth