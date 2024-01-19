import {  selector } from "recoil";
import { todoAtom } from "../atom/todoAtom";

export const titleSelector = selector({
  key: "titleSelector",
  get: ({ get }) => {
    const title = get(todoAtom);
    return title
  },
});

export const setTitleSelector = selector({
  key: "setTitleSelector",
  set: ({ set }) => {
    const setTitle = set(todoAtom);
    return setTitle
  },
});
