import {
  Badge,
  Box,
  Button,
  Flex,
  Group,
  HStack,
  IconButton,
  Text,
  Menu,
} from "@chakra-ui/react";
import {
  LuChevronDown,
  LuChevronLeft,
  LuChevronRight,
  LuFilter,
} from "react-icons/lu";
import { Add, People } from "iconsax-reactjs";
import { usePlannerView } from "@/context/PlannerViewContext";

export const DateNavigation = () => {
  const today = new Date();
  const { currentDate, setCurrentDate } = usePlannerView();

  const formatDay = (date: Date) =>
    date.toLocaleDateString("en-US", { weekday: "short" });
  const formatDate = (date: Date) => date.getDate();
  const formatMonthYear = (date: Date) =>
    date.toLocaleDateString("en-US", { month: "short", year: "numeric" });

  const previousDay = () =>
    setCurrentDate((prev) => new Date(prev.getTime() - 86400000));
  const nextDay = () =>
    setCurrentDate((prev) => new Date(prev.getTime() + 86400000));
  const resetToday = () => setCurrentDate(today);

  const getRelativeDayText = (date: Date) => {
    const diffTime = date.setHours(0, 0, 0, 0) - today.setHours(0, 0, 0, 0);
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "Current day";
    if (diffDays === -1) return "Yesterday";
    if (diffDays === 1) return "Tomorrow";
    if (diffDays < 0) return `${Math.abs(diffDays)} days ago`;
    return `In ${diffDays} days`;
  };

  return (
    <Flex justify="space-between" align="center" w="full">
      <HStack gap={2}>
        <HStack align="center" gap={3}>
          <Badge
            color="brandNeutralGrey"
            fontSize="sm"
            bg="transparent"
            borderColor="brandNeutralOutline"
            borderRadius="full"
            variant="outline"
            py="2"
            px="3"
          >
            {formatDay(currentDate)}{" "}
            <Text fontWeight="semibold" color="brandBlack">
              {formatDate(currentDate)}
            </Text>
          </Badge>
          <Text fontSize="xl" fontWeight="semibold" color="brandBlack">
            {formatMonthYear(currentDate)}
          </Text>
        </HStack>
      </HStack>

      <HStack gap={3}>
        <HStack gap={2}>
          <IconButton
            aria-label="Users"
            variant="outline"
            rounded="md"
            p="0.625rem"
            borderColor="brandNeutralOutline"
            _icon={{ w: "5", h: "5" }}
            w="10"
            h="10"
            color="brandBlack"
          >
            <People size="32" />
          </IconButton>
          <IconButton
            aria-label="Filter"
            variant="outline"
            rounded="md"
            p="0.625rem"
            borderColor="brandNeutralOutline"
            _icon={{ w: "5", h: "5" }}
            w="10"
            h="10"
            color="brandBlack"
          >
            <LuFilter />
          </IconButton>
        </HStack>

        <Group
          gap={0}
          borderWidth="1px"
          borderColor="brandNeutralOutline"
          rounded="md"
          color="brandBlack"
        >
          <IconButton
            aria-label="Previous day"
            variant="ghost"
            size="sm"
            rounded="none"
            roundedStart="md"
            onClick={previousDay}
          >
            <LuChevronLeft />
          </IconButton>
          <Button
            variant="ghost"
            size="sm"
            fontWeight="medium"
            rounded="none"
            px={4}
            borderXWidth="1px"
            borderColor="brandNeutralOutline"
            onClick={resetToday}
          >
            {getRelativeDayText(currentDate)}
          </Button>
          <IconButton
            aria-label="Next day"
            variant="ghost"
            size="sm"
            rounded="none"
            roundedEnd="md"
            onClick={nextDay}
          >
            <LuChevronRight />
          </IconButton>
        </Group>

        <Menu.Root>
          <Menu.Trigger asChild>
            <Button
              variant="outline"
              size="sm"
              rounded="md"
              color="brandBlack"
              borderColor="brandNeutralOutline"
              display="flex"
              alignItems="center"
              gap="0.5rem"
            >
              <Box w={2} h={2} rounded="full" bg="green.500" />
              This day
              <LuChevronDown />
            </Button>
          </Menu.Trigger>
          <Menu.Positioner>
            <Menu.Content minW="180px">
              <Menu.Item value="day">Deze daag</Menu.Item>
              <Menu.Item value="week">Deze Week</Menu.Item>
              <Menu.Item value="month">Maand</Menu.Item>
              <Menu.Item value="custom">
                Custom <Add size="15" />
              </Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Menu.Root>

        <Button
          variant="outline"
          size="sm"
          rounded="md"
          color="brandBlack"
          borderColor="brandNeutralOutline"
        >
          Publish All
        </Button>

        <Button
          variant="outline"
          size="sm"
          rounded="md"
          color="brandNeutralGrey"
        >
          <Add size="48" /> Lock Shift
        </Button>
      </HStack>
    </Flex>
  );
};
