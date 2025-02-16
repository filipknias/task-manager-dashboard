import { Task } from "@/features/tasks/types/Task";
import { useTasksStore } from "@/store/store";
import { compareDateStrings } from "@/utilities/compare-dates";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

export default function useTasks() {
    const { tasks } = useTasksStore();
    const [queriedTasks, setQueriedTasks] = useState<Task[]>(() => {
        return tasks.sort((a, b) => compareDateStrings(a.createdAt, b.createdAt));
    });
    const [searchParams] = useSearchParams();
    const status = searchParams.get("status");
    const sort = searchParams.get("sort");
    const search = searchParams.get("search");

    useEffect(() => {
        let allTasks = [...tasks];

        if (search) {
            allTasks = allTasks.filter((task) => {
                return task.title.toLowerCase().includes(search) || task.description.toLowerCase().includes(search);
            });
        }

        if (status && status !== "all") {
            allTasks = allTasks.filter((task) => task.status === status);
        }

        if (sort) {
            allTasks.sort((a, b) => { 
                if (sort === "asc") {
                    return compareDateStrings(b.createdAt, a.createdAt);
                } else {
                    return compareDateStrings(a.createdAt, b.createdAt);
                }
            });
        }

        setQueriedTasks(allTasks);
    }, [searchParams, tasks]);

    return { tasks: queriedTasks };
}
