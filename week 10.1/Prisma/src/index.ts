import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface Todo {
  title: string;
  description: string;
  done: boolean;
  userId: number;
}

interface User{
  username: string,
  password: string,
  email: string
}

async function insertUser({username, password, email}:User) {
  const res = await prisma.user.create({
    data: {
      username,
      email,
      password,
    },
  });
  console.log(res);
}

async function insertTodo({ title, description, done, userId }: Todo) {
  const res = await prisma.todo.create({
    data: {
      title,
      description,
      done,
      userId,
    },
  });
  console.log(res);
}

insertTodo({
  title: "Complete Cohort Classes",
  description: "Completed the Postgres and Prisma classes.",
  done: true,
  userId: 1,
});
