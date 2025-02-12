import Input from "@/components/Input";

export default function SearchTasks() {
    return (
        <div>
            <label className="font-medium text-sm block mb-2" htmlFor="search">Search tasks</label>
            <Input
                type="text"
                id="search"
                placeholder="Search tasks by name or description"
                className="bg-white"
            />
        </div>
    )
}
