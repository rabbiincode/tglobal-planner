"use client";
import { useRouter } from "next/navigation";
import {
  Box,
  Flex,
  Menu,
  Text,
  Image,
  HStack,
  IconButton,
} from "@chakra-ui/react";

import {
  Category,
  Setting2,
  ArrowDown2,
  Notification,
  HamburgerMenu,
} from "iconsax-reactjs";

export const Header = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  const router = useRouter();

  return (
    <Flex
      h="6rem"
      bg="#fff"
      align="center"
      justify="space-between"
      position="sticky"
      top="0"
      right="0"
      left="0"
      zIndex="1000"
    >
      <HStack minW="280px" gap="1rem" p="2rem">
        <Image src="/assets/icons/logo.svg" alt="logo" w="10rem" h="100%" />

        <IconButton aria-label="toggle" variant="plain" onClick={toggleSidebar}>
          <HamburgerMenu size="20" />
        </IconButton>
      </HStack>

      <Flex
        w="100%"
        h="100%"
        justify="space-between"
        gap="1rem"
        px="2rem"
        borderBottom="0.0625rem solid #D9E5F2"
        borderLeft="0.0625rem solid #D9E5F2"
      >
        <Text />

        <HStack gap="3rem">
          <HStack gap="1.25rem">
            <IconButton aria-label="apps" variant="subtle">
              <Category color="#009FE3" size="20" />
            </IconButton>

            <IconButton aria-label="settings" variant="subtle">
              <Setting2 size="20" />
            </IconButton>

            <IconButton
              aria-label="notifications"
              variant="subtle"
              position="relative"
            >
              <Notification size="20" />
              <Box
                as="span"
                pos="absolute"
                right="0.625rem"
                top="0.5rem"
                w="2"
                h="2"
                bg="red.500"
                borderRadius="full"
              />
            </IconButton>
          </HStack>

          <Menu.Root>
            <Menu.Trigger asChild>
              <HStack cursor="pointer" gap="1.5rem">
                <Box>
                  <Text fontSize="0.85rem" fontWeight="600">
                    Paul Cornelius
                  </Text>
                  <Text fontSize="0.75rem" color="#718096">
                    Paul@dstrct.com
                  </Text>
                </Box>

                <ArrowDown2 size="16" />
              </HStack>
            </Menu.Trigger>

            <Menu.Positioner>
              <Menu.Content py="0.5rem">
                <Menu.Item
                  value="profile"
                  onClick={() => router.push("/profile")}
                >
                  Profile
                </Menu.Item>

                <Menu.Item
                  value="settings"
                  onClick={() => router.push("/settings")}
                >
                  Settings
                </Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Menu.Root>
        </HStack>
      </Flex>
    </Flex>
  );
};
