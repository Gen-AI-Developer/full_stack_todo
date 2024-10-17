import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical, Star } from "lucide-react";
import React from "react";

const TodoElement = () => {
  return (
    <div>
      {" "}
      <Card className="bg-[#2a2a2a] border-[#3a3a3a] mb-4">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-2xl font-medium flex text-white items-center gap-2">
            <Star className="h-4 w-4 text-white fill-white" />
            Complete the todo App UI/UX
          </CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 text-white hover:bg-[#3a3a3a]"
              >
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-[160px] bg-[#2a2a2a] text-white border-[#3a3a3a]"
            >
              <DropdownMenuItem className="focus:bg-[#3a3a3a]">
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem className="bg-[#3a3a3a] focus:bg-red-500">
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-400">
            Design and finalize the user interface and user experience for the
            Todo App, ensuring a smooth, intuitive, and visually appealing
            layout. Focus on user-friendly navigation, clean aesthetics, and a
            seamless experience across different devices. Pay attention to
            accessibility features, responsiveness, and functionality to enhance
            overall usability. This task will involve wireframing, prototyping,
            and collaborating with team members for feedback and improvements.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TodoElement;
