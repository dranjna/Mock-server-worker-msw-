import { mockDb } from "./mockDb";
import { HttpResponse, http } from "msw";
export const handlers = [
  http.get("https://dummyjson.com/users", () => {
    return HttpResponse.json({ users: mockDb });
  }),
];
