import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ChevronUp } from "lucide-react";
import TaskForm from "./TaskForm";
import { createOverlay } from "../utilities/create-overlay";
import Button from "@/components/Button";
import useClickOutside from "@/hooks/useClickOutside";

export default function CreateTaskPopup() {
    const [popupOpen, setPopupOpen] = useState(false);
    const popupElementRef = useRef<HTMLDivElement|null>(null);

    useEffect(() => {
        if (popupOpen) {
            const overlayElement = createOverlay("overlay");
            document.body.appendChild(overlayElement);
        } else {
            const overlayElement = document.querySelector("#overlay");
            if (overlayElement) {
                document.body.removeChild(overlayElement);
            }
        }
    }, [popupOpen]);

    useClickOutside(popupElementRef, () => {
        setPopupOpen(false);
    });

    return (
        <div className="fixed bottom-4 left-0 w-full px-4 z-50">
            <div className="w-full max-w-lg mx-auto">
                <AnimatePresence initial={false}>
                    {popupOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            className="w-full bg-white mb-3 px-4 py-6 rounded-2xl overflow-hidden flex"
                            key="box"
                            data-testid="task-popup"
                            ref={popupElementRef}
                        >
                            <TaskForm onSubmitCallback={() => setPopupOpen(false)} />
                        </motion.div>
                    )}
                </AnimatePresence>
                <Button 
                    className="rounded-full p-2 flex items-center text-white w-full transition duration-150 cursor-pointer bg-indigo-700 hover:bg-indigo-800 shadow-md shadow-indigo-800"
                    onClick={() => setPopupOpen(!popupOpen)}
                >
                    <div className="flex items-center gap-3">
                        <span className={popupOpen ? "rotate-180" : ""}>
                            <ChevronUp />
                        </span>
                        <p className="text-sm font-medium">Create new task</p>
                    </div>
                </Button>
            </div>
        </div>
    )
}
