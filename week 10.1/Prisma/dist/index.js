"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertUser({ username, password, email }) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.create({
            data: {
                username,
                email,
                password,
            },
        });
        console.log(res);
    });
}
function insertTodo({ title, description, done, userId }) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.todo.create({
            data: {
                title,
                description,
                done,
                userId,
            },
        });
        console.log(res);
    });
}
insertTodo({
    title: "Complete Cohort Classes",
    description: "Completed the Postgres and Prisma classes.",
    done: true,
    userId: 1,
});
