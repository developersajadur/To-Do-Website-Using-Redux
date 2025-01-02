
export interface TTask {
    id: string | number;
    title: string;
    description: string;
    dueDate: string;
    priority: "low" | "medium" | "high";
    isCompleted: boolean;
}