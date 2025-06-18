"use client";

import { ResponsiveModal } from "@/components/responsive-modal";
import { useCreateTaskModal } from "../hooks/use-create-task-modal";
import { CreateTaskFormWrapper } from "./create-task-form-wrapper";
import { TaskStatus } from "../types";

export const CreateTaskModal = () => {
    const { isOpen, setIsOpen, close, initialStatus } = useCreateTaskModal();

    return(
        <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
            {/* MY UPDATE 6/16/2025 */}
            {/* // eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            <CreateTaskFormWrapper onCancel={close} initialStatus={initialStatus as TaskStatus} />
        </ResponsiveModal>
    );
};