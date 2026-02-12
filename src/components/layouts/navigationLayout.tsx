"use client";
import { useState } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Box } from "@chakra-ui/react";

export default function NavigationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <Sidebar isOpen={sidebarOpen} />

      <Header
        sidebarOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      <Box
        ml={sidebarOpen ? "280px" : "0"}
        transition="all 0.2s ease"
      >
        {children}
      </Box>
    </>
  );
}
