import Button from "@/components/Button";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import { useTasksStore } from "@/store/store";
import { useState } from "react";

type TaskFormProps = {
    onSubmitCallback?: () => void;
}

export default function TaskForm({ onSubmitCallback }: TaskFormProps) {
    const { addTask } = useTasksStore();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addTask({ title, description });
        if (onSubmitCallback) {
            onSubmitCallback();
        }
    };
    
    return (
        <form className="w-full" onSubmit={handleSubmit}>
            <h2 className="font-medium text-lg mb-4">Create task</h2>
            <Input 
                type="text"
                placeholder="Title"
                className="mb-4 w-full"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <Textarea
                className="w-full resize-none mb-4"
                placeholder="Description"
                rows={5}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            ></Textarea>
            <Button type="submit" className="bg-blue-500 hover:bg-blue-600 w-full">Create task</Button>
        </form>
    )
}
