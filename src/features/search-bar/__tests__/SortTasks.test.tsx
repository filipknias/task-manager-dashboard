import { render, screen, fireEvent } from "@testing-library/react"
import { test, describe } from 'vitest';
import SortTasks from "@/features/search-bar/components/SortTasks";

describe("SortTasks", () => {
    test("renders component", () => {
        render(<SortTasks />);
    });

    test("should change select value", () => {
        render(<SortTasks />);

        const select = screen.getByRole('combobox', { name: 'Sort by date' });

        expect(select).toBeInTheDocument();

        fireEvent.change(select, { target: { value: "desc" } });
        expect(select).toHaveValue('desc');
    });
})