"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MoreVertical, Star } from "lucide-react";
import React, { useState } from "react";

interface TodoElementProps {
  id: number; // Change this to number
  title: string;
  description: string;
  onDelete: (id: number) => void;
  onEdit: (id: number, title: string, description: string) => void;
}

export default function TodoElement({
  id,
  title,
  description,
  onDelete,
  onEdit,
}: TodoElementProps) {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editDescription, setEditDescription] = useState(description);

  const handleDelete = () => {
    onDelete(id);
    setIsDeleteDialogOpen(false);
  };

  const handleEdit = () => {
    onEdit(id, editTitle, editDescription);
    setIsEditDialogOpen(false);
  };

  return (
    <div>
      <Card className="bg-[#2a2a2a] border-[#3a3a3a] mb-4">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-2xl font-medium flex text-white items-center gap-2">
            <Star className="h-4 w-4 text-white fill-white" />
            {title}
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
                Mark As Complete
              </DropdownMenuItem>
              <Dialog
                open={isEditDialogOpen}
                onOpenChange={setIsEditDialogOpen}
              >
                <DialogTrigger asChild>
                  <DropdownMenuItem
                    onSelect={(e) => e.preventDefault()}
                    className="focus:bg-[#3a3a3a]"
                  >
                    Edit
                  </DropdownMenuItem>
                </DialogTrigger>
                <DialogContent className="bg-[#2a2a2a] text-white border-[#3a3a3a]">
                  <DialogHeader>
                    <DialogTitle>Edit Todo</DialogTitle>
                    <DialogDescription className="text-gray-400">
                      Make changes to your todo here. Click save when you're
                      done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label htmlFor="title" className="text-right">
                        Title
                      </label>
                      <Input
                        id="title"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        className="col-span-3 bg-[#3a3a3a] border-[#4a4a4a] text-white"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label htmlFor="description" className="text-right">
                        Description
                      </label>
                      <Textarea
                        id="description"
                        value={editDescription}
                        onChange={(e) => setEditDescription(e.target.value)}
                        className="col-span-3 bg-[#3a3a3a] border-[#4a4a4a] text-white"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button
                      variant="outline"
                      onClick={() => setIsEditDialogOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button onClick={handleEdit}>Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <Dialog
                open={isDeleteDialogOpen}
                onOpenChange={setIsDeleteDialogOpen}
              >
                <DialogTrigger asChild>
                  <DropdownMenuItem
                    onSelect={(e) => e.preventDefault()}
                    className="focus:bg-red-500"
                  >
                    Delete
                  </DropdownMenuItem>
                </DialogTrigger>
                <DialogContent className="bg-[#2a2a2a] text-white border-[#3a3a3a]">
                  <DialogHeader>
                    <DialogTitle>
                      Are you sure you want to delete this todo?
                    </DialogTitle>
                    <DialogDescription className="text-gray-400">
                      This action cannot be undone. This will permanently delete
                      the todo from your list.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button
                      variant="outline"
                      onClick={() => setIsDeleteDialogOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button variant="destructive" onClick={handleDelete}>
                      Delete
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-400">{description}</p>
        </CardContent>
      </Card>
    </div>
  );
}
