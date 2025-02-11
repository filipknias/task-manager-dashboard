import { Status } from '@/features/tasks/types/Status';
import { Task } from '@/features/tasks/types/Task'
import { nanoid } from 'nanoid';
import { create } from 'zustand';
import { initialTasks } from './data';

type Store = {
    tasks: Task[];
    addTask: (task: { title: string, description: string; }) => void;
    removeTask: (taskId: string) => void;
    toggleTask: (taskId: string) => void;
    updateTask: (taskId: string, updateData: { title: string, description: string; }) => void;
}

export const useTasksStore = create<Store>()((set) => ({
    tasks: initialTasks,

    addTask: (task: { title: string, description: string; }) => {
        const newTask: Task = { 
            ...task,
            id: nanoid(),
            status: "in-progress",
            createdAt: Date.now().toLocaleString(),
        };
        set((state) => ({ tasks: [ ...state.tasks, newTask ] }));
    },

    removeTask: (taskId: string) => {
        set((state) => {
            const newTasks = state.tasks.filter((task) => task.id !== taskId);
            return { tasks: newTasks };
        });
    },

    toggleTask: (taskId: string) => {
        set((state) => {
            const newTasks = state.tasks.map((task) => {
                if (task.id === taskId) {
                    const toggleStatus: Status = task.status === "in-progress" ? "completed" : "in-progress";
                    return { ...task, status: toggleStatus };
                }
                return task;
            });
            return { tasks: newTasks };
        });
    },

    updateTask: (taskId: string, updateData: { title: string, description: string; }) => {
        set((state) => {
            const newTasks = state.tasks.map((task) => {
                if (task.id === taskId) {
                    return { ...task, ...updateData };
                }
                return task;
            });
            return { tasks: newTasks };
        });
    },
}))