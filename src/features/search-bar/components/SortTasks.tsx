import Select from "@/components/Select";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

export default function SortTasks() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [sortOrder, setSortOrder] = useState<string>(() => {
        const searchParamsSortOrder = searchParams.get("sort");
        return searchParamsSortOrder || "desc";
    });

    useEffect(() => {
        setSearchParams({ sort: sortOrder });
    }, [sortOrder]);

    useEffect(() => {
        if (!searchParams.get("sort")) {
            setSortOrder("desc");
        }
    }, [searchParams]);

    return (
        <div>
            <label className="font-medium text-sm block mb-2" htmlFor="sort-by-date">Sort by date</label>   
            <Select 
                id="sort-by-date" 
                className="w-40"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
            >
                <option value="desc">Latest</option>
                <option value="asc">Oldest</option>
            </Select>
        </div>
    )
}
