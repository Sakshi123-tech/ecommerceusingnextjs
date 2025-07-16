"use client";
import { createContext, useContext, useState } from "react";

const SearchContext = createContext<{
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}>({
  searchTerm: "",
  setSearchTerm: () => {},
});

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}
