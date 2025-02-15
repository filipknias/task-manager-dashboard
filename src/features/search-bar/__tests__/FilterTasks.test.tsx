import { screen, fireEvent } from "@testing-library/react"
import { test, describe } from 'vitest';
import FilterTasks from "@/features/search-bar/components/FilterTasks";
import { render } from "@/utilities/test-utils";

describe("FilterTasks", () => {
    test("renders component", () => {
        render(<FilterTasks />);
    });

    test("should change select value", () => {
        render(<FilterTasks />);

        const select = screen.getByRole('combobox', { name: 'Filter by status' });

        expect(select).toBeInTheDocument();

        fireEvent.change(select, { target: { value: "completed" } });
        expect(select).toHaveValue('completed');
    });
})