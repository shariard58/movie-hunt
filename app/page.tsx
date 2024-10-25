"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AllMovies from "./components/home/AllMovies";

// creating a new QueryClient instance
const queryClient = new QueryClient();
export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="px-4">
        <AllMovies />
      </div>
    </QueryClientProvider>
  );
}
