import { Task } from "../types/Task";
import TaskCard from "./TaskCard";

type TasksGridTypes = {
    tasks: Task[];
}

export default function TasksList({ tasks }: TasksGridTypes) {
  return (
    <div className="flex flex-col gap-4">
        {tasks.map((task) => (
            <TaskCard key={task.id} {...task} />
        ))}
    </div>
  )
}
