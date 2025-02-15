import Input from "@/components/Input";
import { useSearchParams } from "react-router";

export default function SearchTasks() {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === "") {
            searchParams.delete("search");
            setSearchParams(searchParams);
        } else {
            setSearchParams({ search: e.target.value });
        }
    };

    return (
        <div>
            <label className="font-medium text-sm block mb-2" htmlFor="search">Search tasks</label>
            <Input
                type="text"
                id="search"
                placeholder="Search tasks by name or description"
                className="bg-white"
                value={searchParams.get("search") ?? ""}
                onChange={handleChange}
            />
        </div>
    )
}
