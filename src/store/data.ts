import { Task } from "@/features/tasks/types/Task";
import { nanoid } from "nanoid";

export const initialTasks: Task[] = [
    {
        id: nanoid(),
        title: "Write report",
        description: "Complete the monthly sales report",
        status: "in-progress",
        createdAt: "2025-02-10T08:30:00Z"
    },
    {
        id: nanoid(),
        title: "Fix bug #243",
        description: "Resolve login issue in authentication module",
        status: "completed",
        createdAt: "2025-02-09T10:15:00Z"
    },
    {
        id: nanoid(),
        title: "Design homepage",
        description: "Create wireframes and UI design for homepage",
        status: "in-progress",
        createdAt: "2025-02-08T14:00:00Z"
    },
    {
        id: nanoid(),
        title: "Update documentation",
        description: "Revise API documentation for the new endpoints",
        status: "completed",
        createdAt: "2025-02-07T09:45:00Z"
    },
    {
        id: nanoid(),
        title: "Prepare presentation",
        description: "Create slides for the quarterly meeting",
        status: "in-progress",
        createdAt: "2025-02-06T11:20:00Z"
    },
    {
        id: nanoid(),
        title: "Code review",
        description: "Review pull requests for the latest feature branch",
        status: "completed",
        createdAt: "2025-02-05T15:30:00Z"
    },
    {
        id: nanoid(),
        title: "Refactor database schema",
        description: "Optimize tables and indexes for better performance",
        status: "in-progress",
        createdAt: "2025-02-04T13:10:00Z"
    },
    {
        id: nanoid(),
        title: "Conduct user testing",
        description: "Gather feedback from users on the beta version",
        status: "completed",
        createdAt: "2025-02-03T12:40:00Z"
    },
    {
        id: nanoid(),
        title: "Implement notifications",
        description: "Develop push notification feature for mobile app",
        status: "in-progress",
        createdAt: "2025-02-02T16:05:00Z"
    },
    {
        id: nanoid(),
        title: "Deploy new release",
        description: "Roll out the latest version to production",
        status: "completed",
        createdAt: "2025-02-01T18:00:00Z"
    },
];