import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { worker } from "./msw/browser";
async function enableMockServer() {
  if (import.meta.env.VITE_ENABLE_MSW === "true") {
    await worker.start();
  }
}
enableMockServer().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});
