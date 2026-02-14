"use client";
import { TEvent } from "@/lib/planner/types";
import { EventPopover } from "./EventPopover";
import { useState, useRef, useEffect } from "react";
import { Box, Button, Flex, Text, Portal } from "@chakra-ui/react";

export interface EventCardProps {
  title: string;
  timeRange: string;
  assignee: string;
  initials: string;
  color: string;
  events?: TEvent[];
  date?: string;
  seeAllPlacement?: "left" | "right";
}

export const EventCard = ({
  title,
  timeRange,
  assignee,
  initials,
  color,
  events = [],
  date = "Wednesday 31",
  seeAllPlacement = "right",
}: EventCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [popoverPos, setPopoverPos] = useState({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleSeeAllClick = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const popoverWidth = 220;
      let leftPos = rect.right + 10;

      if (leftPos + popoverWidth > window.innerWidth) {
        leftPos = rect.left - popoverWidth - 10;
      }

      setPopoverPos({
        top: rect.top + rect.height / 2,
        left: leftPos,
      });
    }
    setIsOpen(true);
  };

  return (
    <Box
      borderLeftWidth="4px"
      borderLeftColor={`${color}.400`}
      bg={`${color}.50`}
      borderWidth="1px"
      borderColor={`${color}.200`}
      borderLeftStyle="solid"
      p={2}
      rounded="sm"
      shadow="sm"
      h="full"
      w="full"
      minH="80px"
      _hover={{ shadow: "md" }}
      transition="all 0.2s"
      cursor="pointer"
      flex={1}
      position="relative"
      zIndex={1}
    >
      <Flex mb={1} justify="space-between">
        <Flex
          bg="white"
          w={6}
          h={6}
          rounded="full"
          align="center"
          justify="center"
          borderWidth="1px"
          borderColor={`${color}.200`}
        >
          <Text fontSize="2xs" color={`${color}.600`} fontWeight="bold">
            {initials}
          </Text>
        </Flex>
      </Flex>

      <Text fontWeight="bold" fontSize="sm" lineHeight="shorter" mb={0.5} color="brandBlack" truncate>
        {title}
      </Text>
      <Text fontSize="xs" color="gray.500" mb={1}>
        {timeRange}
      </Text>
      <Text fontSize="xs" color={`${color}.600`} fontWeight="medium" truncate>
        {assignee}
      </Text>

      <Button
        ref={buttonRef}
        variant="ghost"
        position="absolute"
        left="104%"
        bg="brandNeutralLight"
        color="brandNeutralGrey"
        rounded="6px"
        h="7.1875rem"
        w="6.062rem"
        top="50%"
        transform="translateY(-50%)"
        zIndex={5}
        onClick={handleSeeAllClick}
        aria-label="See all events for day"
      >
        See all
      </Button>

      {isOpen && (
        <Portal>
          <Box
            ref={popoverRef}
            position="fixed"
            top={`${popoverPos.top}px`}
            left={`${popoverPos.left}px`}
            transform="translateY(-50%)"
            bg="white"
            shadow="lg"
            borderRadius="md"
            zIndex={9999}
            minW="200px"
          >
            <EventPopover date={date} events={events} />
          </Box>
        </Portal>
      )}
    </Box>
  );
};
