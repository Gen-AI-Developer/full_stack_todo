"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Star, MoreVertical, Plus } from "lucide-react";
import TodoElement from "./TodoElement";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function TodoApp() {
  const [showCompleted, setShowCompleted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTodo, setNewTodo] = useState({ title: "", description: "" });

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically add the new todo to your state or send it to an API
    console.log("New Todo:", newTodo);
    setNewTodo({ title: "", description: "" });
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white p-4 md:p-6 lg:p-8">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">FST</h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-[#2a2a2a]"
            >
              <MoreVertical className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-56 bg-[#2a2a2a] text-white border-[#3a3a3a]"
          >
            <DropdownMenuItem
              onClick={() => setShowCompleted(true)}
              className="focus:bg-[#3a3a3a]"
            >
              Show Completed
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setShowCompleted(false)}
              className="focus:bg-[#3a3a3a]"
            >
              Show Uncompleted
            </DropdownMenuItem>
            <DropdownMenuItem className="focus:bg-[#3a3a3a]">
              About Developer
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <TodoElement />
      <Button
        className="fixed bottom-4 right-4 rounded-full h-14 w-14 bg-[#3a3a3a] hover:bg-gray-700"
        size="icon"
      >
        <Plus className="h-6 w-6" />
      </Button>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogTrigger asChild>
          <Button
            className="fixed bottom-4 right-4 rounded-full h-14 w-14 bg-gray-600 hover:bg-gray-700"
            size="icon"
          >
            <Plus className="h-6 w-6" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-[#2a2a2a] text-white border-[#3a3a3a]">
          <DialogHeader>
            <DialogTitle>Add New Todo</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleAddTodo} className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                id="title"
                value={newTodo.title}
                onChange={(e) =>
                  setNewTodo({ ...newTodo, title: e.target.value })
                }
                className="col-span-3 bg-[#3a3a3a] border-[#4a4a4a] text-white"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea
                id="description"
                value={newTodo.description}
                onChange={(e) =>
                  setNewTodo({ ...newTodo, description: e.target.value })
                }
                className="col-span-3 bg-[#3a3a3a] border-[#4a4a4a] text-white"
              />
            </div>
            <Button
              type="submit"
              className="ml-auto bg-gray-600 focus:bg-green-400"
            >
              Add Todo
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
