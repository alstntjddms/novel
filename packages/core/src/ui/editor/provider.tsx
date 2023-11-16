"use client";

import { createContext } from "react";

export const NovelContext = createContext<{
  completionApi: string;
}>({
  completionApi: "/api/generate",
});

export const ContextSummarize = createContext<{
  summarizeApi: string;
}>({
  summarizeApi: "/api/summarize",
});
