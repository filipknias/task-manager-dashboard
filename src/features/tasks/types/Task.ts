import { Status } from "./Status";

export type Task = {
    id: string;
    title: string;
    description: string;
    status: Status;
    createdAt: string;
};