import TasksList from "./features/tasks/components/TasksList";
import { useTasksStore } from "./store/store";

export default function App() {
    const { tasks } = useTasksStore();

    return (
        <div className="container mx-auto px-4 py-12">
            <TasksList tasks={tasks} />
        </div>
    )
}
