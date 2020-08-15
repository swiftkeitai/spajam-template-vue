export enum State { All, Working, Done }

export interface TodoItem {
  id: number
  comment: string
  state: State.Working | State.Done
}