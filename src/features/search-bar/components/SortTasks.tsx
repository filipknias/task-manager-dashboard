import Select from "@/components/Select";
import { useSearchParams } from "react-router";

export default function SortTasks() {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSearchParams({ sort: e.target.value });
    };

    return (
        <div>
            <label className="font-medium text-sm block mb-2" htmlFor="sort-by-date">Sort by date</label>   
            <Select 
                id="sort-by-date" 
                className="w-40"
                value={searchParams.get("sort") ?? "desc"}
                onChange={handleChange}
            >
                <option value="desc">Latest</option>
                <option value="asc">Oldest</option>
            </Select>
        </div>
    )
}
