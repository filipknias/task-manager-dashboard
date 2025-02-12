import { render, screen } from "@testing-library/react"
import { test, describe } from 'vitest';
import TaskCard from "@/features/tasks/components/TaskCard";
import { nanoid } from "nanoid";
import { Status } from "../types/Status";

describe("TaskCard", () => {
    test("renders component", () => {
        const props = {
            id: nanoid(),
            title: "Test Task",
            description: "This is a test task",
            status: "in-progress" as Status,
            createdAt: "2025-02-10T08:30:00Z",
        };

        render(<TaskCard {...props} />);
    });

    test("renders header with label from props", () => {
        const props = {
            id: nanoid(),
            title: "Test Task",
            description: "This is a test task",
            status: "in-progress" as Status,
            createdAt: "2025-02-10T08:30:00Z",
        };

        render(<TaskCard {...props} />);

        const header = screen.getByRole('heading');

        expect(header).toBeInTheDocument()
        expect(header).toHaveTextContent(props.title);
    });

    test("renders paragraph with label from props", () => {
        const props = {
            id: nanoid(),
            title: "Test Task",
            description: "This is a test task",
            status: "in-progress" as Status,
            createdAt: "2025-02-10T08:30:00Z",
        };

        render(<TaskCard {...props} />);

        const paragraph = screen.getByRole('paragraph');

        expect(paragraph).toBeInTheDocument()
        expect(paragraph).toHaveTextContent(props.description);
    });

    test("renders button with correct in progress status label", () => {
        const props = {
            id: nanoid(),
            title: "Test Task",
            description: "This is a test task",
            status: "in-progress" as Status,
            createdAt: "2025-02-10T08:30:00Z",
        };

        render(<TaskCard {...props} />);

        const button = screen.getByRole('button', { name: "Finish task" });

        expect(button).toBeInTheDocument()
    });

    test("renders button with correct completed status label", () => {
        const props = {
            id: nanoid(),
            title: "Test Task",
            description: "This is a test task",
            status: "completed" as Status,
            createdAt: "2025-02-10T08:30:00Z",
        };

        render(<TaskCard {...props} />);

        const button = screen.getByRole('button', { name: "Resume Task" });

        expect(button).toBeInTheDocument()
    });
})