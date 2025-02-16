import clsx from "clsx";
import { Status } from "../types/Status";
import { Trash2, Pencil } from "lucide-react";
import Button from "@/components/Button";
import StandaloneIconButton from "@/components/StandaloneIconButton";
import { useTasksStore } from "@/store/store";
import { useRef, useState } from "react";
import useClickOutside from "@/hooks/useClickOutside";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";

type TaskCardProps = {
    id: string;
    title: string;
    description: string;
    status: Status;
};

export default function TaskCard({ id, title, description, status }: TaskCardProps) {
    const { removeTask, toggleTask, updateTask } = useTasksStore();
    const [isEditing, setIsEditing] = useState(false);
    const editingAreaRef = useRef<HTMLDivElement|null>(null);

    useClickOutside(editingAreaRef, () => {
        setIsEditing(false);
    });

    return (
        <div className={clsx("p-4 rounded-md relative", status === "in-progress" ? "bg-white" : "bg-indigo-600")}>
            <div className="flex items-start justify-between flex-wrap gap-3">
                <div className="lg:flex-1">
                    {isEditing ? (
                        <div className="w-full max-w-md" ref={editingAreaRef}>
                            <Input 
                                type="text" 
                                className={clsx("mb-2", status === "in-progress" ? "text-black" : "text-white")}
                                placeholder="Edit task title"
                                value={title}
                                onChange={(e) => updateTask(id, { title: e.target.value })}
                            />
                            <Textarea 
                                className={clsx(status === "in-progress" ? "text-black" : "text-white")}
                                placeholder="Edit task description"
                                value={description}
                                onChange={(e) => updateTask(id, { description: e.target.value })}
                                rows={3}
                            ></Textarea>
                        </div>
                    ) : (
                        <>
                            <h2 className={clsx("text-xl font-medium mb-2", status === "in-progress" ? "text-black" : "text-white line-through")}>{title}</h2>
                            <p className={clsx("text-sm font-medium max-w-lg", status === "in-progress" ? "text-gray-800" : "text-gray-100 line-through")}>{description}</p>
                        </>
                    )}
                </div>
                <div className="flex gap-2">
                    <Button 
                        className={clsx(
                            status === "in-progress" && "bg-green-500 hover:bg-green-600",
                            status === "completed" && "bg-indigo-500 hover:bg-indigo-400",
                        )}
                        onClick={() => toggleTask(id)}
                    >
                        {status === "in-progress" ? "Finish task" : "Resume Task"}
                    </Button>
                    <StandaloneIconButton
                        className={clsx(
                            status === "in-progress" && "bg-gray-100 hover:bg-gray-200 text-black",
                            status === "completed" && "bg-indigo-500 hover:bg-indigo-400 text-white",
                        )}
                        onClick={() => setIsEditing(true)}
                    >
                        <Pencil className="w-4 h-4" />
                    </StandaloneIconButton>
                    <StandaloneIconButton
                        className={clsx(
                            status === "in-progress" && "bg-gray-100 hover:bg-gray-200 text-black",
                            status === "completed" && "bg-indigo-500 hover:bg-indigo-400 text-white",
                        )}
                        onClick={() => removeTask(id)}
                        aria-label="remove"
                    >
                        <Trash2 className="w-4 h-4" />
                    </StandaloneIconButton>
                </div>
            </div>
        </div>
    )
}
