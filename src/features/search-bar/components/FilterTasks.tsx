import Select from "@/components/Select";
import { useSearchParams } from "react-router";

export default function FilterTasks() {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value === "all") {
            searchParams.delete("status");
            setSearchParams(searchParams);
        } else {
            setSearchParams({ status: e.target.value });
        }
    };

    return (
        <div>
            <label className="font-medium text-sm block mb-2" htmlFor="filter-by-status">Filter by status</label>  
            <Select 
                id="filter-by-status" 
                className="w-40"
                value={searchParams.get("status") ?? "all"}
                onChange={handleChange}
            >
                <option value="all">All</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
            </Select> 
        </div>
  )
}
