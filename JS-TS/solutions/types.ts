export enum TodoStatus {
    PENDING,
    IN_PROGRESS,
    COMPLETED
}

export interface Todo {
id : number ;
title: string;
description: string;
status : TodoStatus;
readonly createdAt : Date;
}

export type NewTodo = Omit<Todo, "id" | "createdAt">;
