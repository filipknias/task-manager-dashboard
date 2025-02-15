import Select from "@/components/Select";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

export default function FilterTasks() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [status, setStatus] = useState<string>(() => {
        const searchParamsStatus = searchParams.get("status");
        return searchParamsStatus || "all";
    });
    
    useEffect(() => {
        if (status === "all") {
            searchParams.delete("status");
            setSearchParams(searchParams);
        } else {
            setSearchParams({ status });
        }
    }, [status]);

    useEffect(() => {
        if (!searchParams.get("status")) {
            setStatus("all");
        }
    }, [searchParams]);

    return (
        <div>
            <label className="font-medium text-sm block mb-2" htmlFor="filter-by-status">Filter by status</label>  
            <Select 
                id="filter-by-status" 
                className="w-40"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
            >
                <option value="all">All</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
            </Select> 
        </div>
  )
}
