import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";
import { worker } from "./msw/browser";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
async function enableMockServer() {
  if (import.meta.env.VITE_ENABLE_MSW === "true") {
    await worker.start();
  }
}
enableMockServer().then(() => {
  const client = new QueryClient();
  createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>,
  );
});
