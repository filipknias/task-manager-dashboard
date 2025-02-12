import Select from "@/components/Select";

export default function FilterTasks() {
    return (
        <div>
            <label className="font-medium text-sm block mb-2" htmlFor="filter-by-status">Filter by status</label>  
            <Select id="filter-by-status" className="w-40">
                <option value="all">All</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
            </Select> 
        </div>
  )
}
