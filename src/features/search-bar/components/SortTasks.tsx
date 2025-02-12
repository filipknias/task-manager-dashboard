import Select from "@/components/Select";

export default function SortTasks() {
    return (
        <div>
            <label className="font-medium text-sm block mb-2" htmlFor="sort-by-date">Sort by date</label>   
            <Select id="sort-by-date" className="w-40">
                <option value="desc">Latest</option>
                <option value="asc">Oldest</option>
            </Select>
        </div>
    )
}
