import { Button } from "@/components/ui/button"; // shadcn Button component
import { X } from "lucide-react"; // Lucide-react for Close Icon
import { Checkbox } from "../ui/checkbox";
import { TTask } from "@/Types/taskType";

// Destructure task in the function component
const TaskCard = ({ task }: { task: TTask }) => {
  return (
    <div className="flex items-center w-96 justify-between border p-4 rounded-md shadow-sm bg-gray-800">
      {/* Task Details */}
      <div className="flex flex-col space-y-2 text-gray-300">
        <div className="flex items-center">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
          <span>{task.title}</span>
        </div>
        <p className="pl-4 text-sm">{task.description}</p>
      </div>

      {/* Delete Icon */}
      <div className="flex gap-2 items-center">
        <Button
          variant="ghost"
          size="sm"
          className="text-red-500 hover:bg-red-500/10"
          aria-label="Delete Task"
        >
          <X className="w-4 h-4" />
        </Button>
        <Checkbox />
      </div>
    </div>
  );
};

export default TaskCard;
