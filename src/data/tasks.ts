
// tasks.ts
export interface Task {
    id: string;
    title: string;
    description: string;
    points: number;
    dueDate: string;
    formLink: string;
  }
  
  export const tasks: Task[] = [
    {
      id: "task1",
      title: "Share Event Poster on Instagram",
      description:
        "Post the official event poster on your Instagram story and tag our page.",
      points: 10,
      dueDate: "2025-09-05",
      formLink: "https://forms.gle/example1",
    },
    {
      id: "task2",
      title: "Refer a Friend",
      description: "Refer at least one friend to register for the event.",
      points: 20,
      dueDate: "2025-09-10",
      formLink: "https://forms.gle/example2",
    },
  ];
  