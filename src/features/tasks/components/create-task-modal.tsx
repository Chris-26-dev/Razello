"use client";

import { ResponsiveModal } from "@/components/responsive-modal";
import { useCreateTaskModal } from "../hooks/use-create-task-modal";
import { CreateTaskFormWrapper } from "./create-task-modal-wrapper";

export const CreateTaskModal = () => {
    const { isOpen, setIsOpen } = useCreateTaskModal();

    return(
        <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
            <CreateTaskFormWrapper onCancel={() => setIsOpen(false)}/>
        </ResponsiveModal>
    );
};