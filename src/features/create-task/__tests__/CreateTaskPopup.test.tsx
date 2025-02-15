import { screen, fireEvent } from "@testing-library/react"
import { test, describe } from 'vitest';
import { render } from "@/utilities/test-utils";
import CreateTaskPopup from "../components/CreateTaskPopup";

describe("CreateTaskPopup", () => {
    test("renders component", () => {
        render(<CreateTaskPopup />);
    });

    test("should show popup after button click", () => {
        render(<CreateTaskPopup />);

        const button = screen.getByRole('button', { name: 'Create new task' });

        expect(button).toBeInTheDocument();
        fireEvent.click(button);

        const createTaskPopup = screen.getByTestId("task-popup");
        expect(createTaskPopup).toBeInTheDocument();
    });
})