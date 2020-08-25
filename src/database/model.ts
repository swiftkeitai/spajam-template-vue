export interface TaskDocument {
  status: "goal" | "todo" | "inprogress" | "done",
  subtitle: string,
  title: string
}