import { Task } from "@/features/tasks/types/Task";
import { useTasksStore } from "@/store/store";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router";

export default function useTasks() {
    const { tasks } = useTasksStore();
    const [queriedTasks, setQueriedTasks] = useState<Task[]>(tasks);
    const [searchParams] = useSearchParams();
    const status = useMemo(() => searchParams.get("status"), [searchParams]);
    const sort = useMemo(() => searchParams.get("sort"), [searchParams]);
    const search = useMemo(() => searchParams.get("search"), [searchParams]);

    const compareDateStrings = useCallback((firstDate: string, secondDate: string) => {
        return new Date(firstDate).getTime() - new Date(secondDate).getTime();
    }, []);

    useEffect(() => {
        if (!status) return;
        setQueriedTasks(tasks.filter((task) => task.status === status));
    }, [status, tasks]);

    useEffect(() => {
        if (!sort) return;
        const sortedTasks = tasks.sort((a, b) => { 
            if (sort === "asc") {
                return compareDateStrings(b.createdAt, a.createdAt);
            } else {
                return compareDateStrings(a.createdAt, b.createdAt);
            }
        });
        setQueriedTasks(sortedTasks);
    }, [sort, tasks]);

    useEffect(() => {
        if (!search) return;
        const searchTasks = tasks.filter((task) => {
            return task.title.toLowerCase().includes(search) || task.description.toLowerCase().includes(search);
        });
        setQueriedTasks(searchTasks);
    }, [search, tasks]);

    useEffect(() => {
        if (searchParams.size === 0) {
            setQueriedTasks(tasks);
        }
    }, [searchParams, tasks]);

    return { tasks: queriedTasks };
}
