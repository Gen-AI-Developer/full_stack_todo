"use client";
import { useEffect, useState } from "react";
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
import { ListTodo, Plus } from "lucide-react";
import TodoElement from "./TodoElement";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [showCompleted, setShowCompleted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTodo, setNewTodo] = useState({ title: "", description: "" });

  useEffect(() => {
    fetch("http://localhost:3000/api/crud")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.error(err));
  }, []);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    // Add the new todo to the list
    const newTodoItem = {
      id: Date.now(), // or use proper ID generation logic
      title: newTodo.title,
      description: newTodo.description,
      completed: false,
    };

    setTodos([...todos, newTodoItem]);
    setNewTodo({ title: "", description: "" });
    setIsModalOpen(false);
  };

  const handleEditTodo = (
    id: number,
    newTitle: string,
    newDescription: string
  ) => {
    fetch(`http://localhost:3000/api/crud/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: newTitle, description: newDescription }),
    })
      .then((res) => res.json())
      .then((updatedTodo) => {
        setTodos((prevTodos) =>
          prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo))
        );
      })
      .catch((err) => console.error(err));
  };

  const handleMarkComplete = (id: number) => {
    fetch(`http://localhost:3000/api/crud/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: true }),
    })
      .then((res) => res.json())
      .then((updatedTodo) => {
        setTodos((prevTodos) =>
          prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo))
        );
      })
      .catch((err) => console.error(err));
  };

  const handleDeleteTodo = (id: number) => {
    fetch(`http://localhost:3000/api/crud/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white p-4 md:p-6 lg:p-8">
      <header className="flex border px-4 border-[#2b2a2a] rounded justify-between items-center mb-6">
        <h1 className="text-xl font-bold">TODO</h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-[#2a2a2a]"
            >
              <ListTodo />
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
      <>
        {todos.map((todo) => (
          <TodoElement
            key={todo.id}
            id={todo.id}
            title={todo.title}
            description={todo.description}
            onDelete={(id) => handleDeleteTodo(id)}
            onEdit={(id, newTitle, newDescription) =>
              handleEditTodo(id, newTitle, newDescription)
            }
          />
        ))}
      </>
      <Button
        className="fixed bottom-4 right-4 rounded-full h-14 w-14 bg-[#3a3a3a] hover:bg-gray-700"
        size="icon"
      >
        <Plus className="h-6 w-6" />
      </Button>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogTrigger asChild>
          <Button
            className="fixed bottom-4 right-4 rounded-full h-14 w-14 bg-gray-600"
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
            <Button type="submit" className="ml-auto bg-green-600">
              Add Todo
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
