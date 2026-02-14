"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Box, Text, VStack, HStack, Collapsible } from "@chakra-ui/react";

import {
  Category,
  Document,
  Notepad2,
  Maximize1,
  MenuBoard,
  ArrowDown2,
  Stickynote,
  DocumentText,
} from "iconsax-reactjs";

const NavItem = ({ icon, arrowIcon, label, active, onClick }: any) => (
  <HStack
    gap="0.75rem"
    w="100%"
    py="0.75rem"
    px="0.25rem"
    borderRadius="0.5rem"
    cursor="pointer"
    onClick={onClick}
    bg={active ? "#F0F4FF" : "transparent"}
    color={active ? "#5653FC" : "#4E5D69"}
    fontWeight={active ? "600" : "500"}
    _hover={{ bg: "#F7FAFC" }}
  >
    <HStack>
      {icon}
      <Text fontSize="0.85rem">{label}</Text>
    </HStack>
    {arrowIcon && <Box ml="auto">{arrowIcon}</Box>}
  </HStack>
);

const NavSubItem = ({ icon, label, active, onClick }: any) => (
  <HStack
    w="100%"
    py="0.5rem"
    pl="1rem"
    cursor="pointer"
    onClick={onClick}
    borderLeftWidth={active ? "0.165rem" : "0.0625rem"}
    borderLeftColor={active ? "#5653FC" : "#d31635ff"}
    borderLeftStyle="solid"
    color={active ? "#5653FC" : "#4E5D69"}
    fontWeight={active ? "600" : "500"}
  >
    {icon}
    <Text fontSize="0.85rem">{label}</Text>
  </HStack>
);

export const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [roosterOpen, setRoosterOpen] = useState(true);

  if (!isOpen) return null;

  const navigate = (path: string) => {
    router.push(path);
  };

  return (
    <Box
      w="280px"
      h="100vh"
      bg="#FFFFFF"
      borderRight="0.0625rem solid #D9E5F2"
      px="1.5rem"
      py="1.65rem"
      mt="6rem"
      position="fixed"
      left={0}
      top={0}
    >
      <VStack align="start" gap="1rem">
        <NavItem
          icon={<Category size="18" />}
          label="Startpagina"
          active={pathname === "/"}
          onClick={() => navigate("/")}
        />

        <Box w="100%">
          <NavItem
            icon={<Maximize1 size="18" />}
            label="Rooster"
            active={pathname.includes("/rooster")}
            onClick={() => setRoosterOpen(!roosterOpen)}
            arrowIcon={
              <ArrowDown2
                size="16"
                style={{
                  transform: roosterOpen ? "rotate(0deg)" : "rotate(-90deg)",
                  transition: "0.2s",
                }}
              />
            }
          />

          <Collapsible.Root open={roosterOpen}>
            <Collapsible.Content>
              <VStack align="start" gap="0" pl="0.65rem" mt="1rem">
                <NavSubItem
                  label="Mijn Rooster"
                  icon={<DocumentText size="18" />}
                  active={pathname === "/pages//rooster"}
                  onClick={() => navigate("/pages//rooster")}
                />
                <NavSubItem
                  label="Planner"
                  icon={<Stickynote size="18" />}
                  active={pathname === "/planner"}
                  onClick={() => navigate("/planner")}
                />
                <NavSubItem
                  label="Instellingen"
                  icon={<Stickynote size="18" />}
                  active={pathname === "/pages/rooster/settings"}
                  onClick={() => navigate("/pages/rooster/settings")}
                />
              </VStack>
            </Collapsible.Content>
          </Collapsible.Root>
        </Box>

        <NavItem
          icon={<Stickynote size="18" />}
          label="My to do Protocols"
          active={pathname === "/pages/protocols"}
          onClick={() => navigate("/pages/protocols")}
        />

        <NavItem
          icon={<Document size="18" />}
          label="Document Management"
          active={pathname === "/pages/documents"}
          onClick={() => navigate("/pages/documents")}
        />

        <NavItem
          icon={<Notepad2 size="18" />}
          label="Department News"
          active={pathname === "/pages/news"}
          onClick={() => navigate("/pages/news")}
        />

        <NavItem
          icon={<MenuBoard size="18" />}
          label="Knowledge Base"
          active={pathname === "/pages/knowledge"}
          onClick={() => navigate("/pages/knowledge")}
        />

        <NavItem
          icon={<DocumentText size="18" />}
          label="General News"
          active={pathname === "/pages/general-news"}
          onClick={() => navigate("/pages/general-news")}
        />
      </VStack>
    </Box>
  );
};
