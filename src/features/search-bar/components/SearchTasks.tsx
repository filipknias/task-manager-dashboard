import Input from "@/components/Input";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

export default function SearchTasks() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState<string>(() => {
        const searchParamsQuery = searchParams.get("search");
        return searchParamsQuery || "";
    });

    useEffect(() => {
        if (searchQuery === "") {
            searchParams.delete("search");
            setSearchParams(searchParams);
        } else {
            setSearchParams({ search: searchQuery });
        }
    }, [searchQuery]);

    useEffect(() => {
        if (!searchParams.get("search")) {
            setSearchQuery("");
        }
    }, [searchParams]);

    return (
        <div>
            <label className="font-medium text-sm block mb-2" htmlFor="search">Search tasks</label>
            <Input
                type="text"
                id="search"
                placeholder="Search tasks by name or description"
                className="bg-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    )
}
