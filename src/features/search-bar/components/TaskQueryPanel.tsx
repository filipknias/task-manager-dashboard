import FilterTasks from "./FilterTasks";
import SearchTasks from "./SearchTasks";
import SortTasks from "./SortTasks";

export default function TaskQueryPanel() {
    return (
        <div className="flex flex-wrap gap-3">
            <div className="md:flex-1 w-full">
                <SearchTasks />
            </div>
            <SortTasks />
            <FilterTasks />
        </div>
    )
}
