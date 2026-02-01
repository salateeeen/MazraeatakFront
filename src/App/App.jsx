import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import queryClient from "./queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import Routers from "./Routers";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Routers/>
    </QueryClientProvider>
  );
}

export default App;
