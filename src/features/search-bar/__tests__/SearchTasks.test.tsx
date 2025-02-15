import { screen, fireEvent } from "@testing-library/react"
import { test, describe } from 'vitest';
import SearchTasks from "@/features/search-bar/components/SearchTasks";
import { render } from "@/utilities/test-utils";

describe("SearchTasks", () => {
    test("renders component", () => {
        render(<SearchTasks />);
    });

    test("should change input value", () => {
        render(<SearchTasks />);

        const input = screen.getByRole('textbox', { name: "Search tasks" });

        expect(input).toBeInTheDocument();

        fireEvent.change(input, { target: { value: "Test" } });
        expect(input).toHaveValue('Test');
    });
})