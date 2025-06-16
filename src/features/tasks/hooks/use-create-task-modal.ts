import { useQueryState, parseAsBoolean, parseAsString } from "nuqs";

export const useCreateTaskModal = () => {
    const [isOpen, setIsOpen] = useQueryState(
        "create-task",
        parseAsBoolean.withDefault(false).withOptions({ clearOnDefault: true })
    );

    const [initialStatus, setInitialStatus] = useQueryState(
        "task-status",
        parseAsString.withDefault("")
    );

    const open = (status?: string) => {
        if (status) {
            setInitialStatus(status);
        } else {
            // This avoids setting empty string
            setInitialStatus(null); // Clears the query param entirely
        }
        setIsOpen(true);
    };

    const close = () => {
        setIsOpen(false);
        setInitialStatus(""); // Clear when modal closes
    };

    return {
        isOpen,
        open,
        close,
        setIsOpen,
        initialStatus,
    };
};


{/* MY UPDATE 6/16/2025 */}
// import { useQueryState, parseAsBoolean } from "nuqs";

// export const useCreateTaskModal = () => {
//     const [isOpen, setIsOpen] = useQueryState(
//         "create-task",
//         parseAsBoolean.withDefault(false).withOptions({ clearOnDefault: true })
//     )

//     const open = () => setIsOpen(true);
//     const close = () => setIsOpen(false);

//     return {
//         isOpen,
//         open,
//         close,
//         setIsOpen,
//     };
// };