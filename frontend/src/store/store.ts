import {create} from 'zustand';

// Define the Task type
interface User {
  id: number;
  name: string;
  cohort: string;
  date: string;
  lastLogin: string;
status: boolean;
}

// Define the store's state and actions
interface UserStore {
  users: User[];
  addUser: (id:number,name: string,cohort: string) => void;
  initialUser:(user:User[])=>void;
  removeUser: (id: number) => void;
}

const Userstore = create<UserStore>((set) => ({
    users: [],
    addUser: (id:number,name: string,cohort: string) =>
        set((state) => ({
        users: [
            ...state.users,
            {
            id:id,
            name: name,
            cohort: cohort,
            date: '17. Nov. 2024',
            lastLogin: '17. Nov. 2024 4:16 PM',
            status: true,
            },
        ],
        }),
    ),
    initialUser:(user:User[])=>set({users:user}),
    removeUser: (id: number) =>
        set((state) => ({
        users: state.users.filter((task) => task.id !== id),
        }),
    ),
    }));


export default Userstore;
