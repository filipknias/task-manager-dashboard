import TaskQueryPanel from "@/features/search-bar/components/TaskQueryPanel";
import TasksList from "@/features/tasks/components/TasksList";
import { useTasksStore } from "@/store/store";

export default function App() {
    const { tasks } = useTasksStore();

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="font-semibold text-3xl md:text-4xl mb-6">Task Manager Dashboard</h1>
            <div className="mb-12">
                <TaskQueryPanel />
            </div>
            <TasksList tasks={tasks} />
        </div>
    )
}
