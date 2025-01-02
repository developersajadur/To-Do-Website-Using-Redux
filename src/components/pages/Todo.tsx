import { useAppSelector } from "@/redux/hooks/hooks";
import TaskCard from "../Todo/TaskCard";

const Todo = () => {
    const tasks = useAppSelector((task) => task.todo.tasks)
    console.log(tasks);
    return (
        <div>
            <h1 className="text-4xl font-semibold">My Todo List</h1>
            <div className="w-full flex flex-col gap-8 justify-center items-center mt-10">
                {
                    tasks?.map((task) => 
                        <TaskCard key={task.id} task={task} />
                    )
                }
  
            </div>
   
            
        </div>
    );
};

export default Todo;