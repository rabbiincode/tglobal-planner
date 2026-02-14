"use client";

import { usePlannerView } from "@/context/PlannerViewContext";
import {
  Dialog,
  Button,
  Input,
  Box,
  Text,
  Flex,
  VStack,
  HStack,
  Field,
  Separator,
} from "@chakra-ui/react";
import { useState } from "react";
import { Add, CloseCircle } from "iconsax-reactjs";
import { TEvent } from "@/lib/planner/types";
import { PLANNER_ROOMS, savePlannerEvents } from "@/lib/planner/constants";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddScheduleModal({ isOpen, onClose }: Props) {
  const { setEvents } = usePlannerView();

  const [title, setTitle] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [duration, setDuration] = useState<number | "">("");

  const calculateEndTime = (start: string, durationHrs: number) => {
    if (!start) return "";
    const [hours, minutes] = start.split(":").map(Number);
    const totalMinutes = hours * 60 + minutes + durationHrs * 60;
    const endHours = Math.floor(totalMinutes / 60) % 24;
    const endMinutes = totalMinutes % 60;
    return `${String(endHours).padStart(2, "0")}:${String(endMinutes).padStart(2, "0")}`;
  };

  const handleCreate = () => {
    if (!isFormValid()) return;

    const endTime = calculateEndTime(startTime, duration as number);

    const eventDate = new Date(date + "T00:00:00");

    const newEvent: TEvent = {
      id: crypto.randomUUID(),
      title,
      date: eventDate.toISOString(),
      startTime,
      endTime,
      assignee: assignedTo,
      initials: assignedTo
        .split(" ")
        .map((n) => n[0])
        .join(""),
      type: "task",
      color: "green",
      columnId: location,
    };

    setEvents((prev) => {
      const updated = [...prev, newEvent];
      savePlannerEvents(updated);
      return updated;
    });

    setTitle("");
    setAssignedTo("");
    setLocation("");
    setDate("");
    setStartTime("");
    setDuration("");

    onClose();
  };

  const durationOptions: { label: string; value: number }[] = [];
  for (let mins = 15; mins <= 360; mins += 15) {
    const hrs = Math.floor(mins / 60);
    const remMins = mins % 60;
    durationOptions.push({
      value: mins / 60,
      label:
        hrs > 0
          ? remMins > 0
            ? `${hrs}h ${remMins}m`
            : `${hrs}h`
          : `${remMins}m`,
    });
  }

  const previewEndTime = duration
    ? calculateEndTime(startTime, duration as number)
    : "";

  const isFormValid = () => {
    if (!title || !assignedTo || !location || !date || !startTime || !duration)
      return false;
    const [hours, minutes] = startTime.split(":").map(Number);
    if (hours > 23 || minutes > 59) return false;
    return true;
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={(e) => !e.open && onClose()}>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content borderRadius="xl">
          <Dialog.Header>
            <Dialog.Title>Create New Roster</Dialog.Title>
            <Dialog.CloseTrigger />
          </Dialog.Header>

          <Dialog.Body>
            <VStack gap={5} align="stretch">
              <Field.Root>
                <Field.Label>Title</Field.Label>
                <Input
                  value={title}
                  placeholder="Enter title"
                  onChange={(e) => setTitle(e.target.value)}
                  style={{ width: "100%", padding: "0.5rem", borderRadius: "0.375rem", border: "1px solid #CBD5E0" }}
                />
              </Field.Root>

              <Field.Root w="100%">
                <Field.Label>Assign to</Field.Label>
                <select
                  value={assignedTo}
                  onChange={(e) => setAssignedTo(e.target.value)}
                  style={{ width: "100%", padding: "0.5rem", borderRadius: "0.375rem", border: "1px solid #CBD5E0" }}
                >
                  <option value="">Select assignee</option>
                  <option>Haico de Gast</option>
                  <option>John Doe</option>
                  <option>Sarah Smith</option>
                </select>
              </Field.Root>

              <Field.Root>
                <Field.Label>Column / Location</Field.Label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  style={{ width: "100%", padding: "0.5rem", borderRadius: "0.375rem", border: "1px solid #CBD5E0" }}
                >
                  <option value="">Select location</option>
                  {PLANNER_ROOMS.map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.name}
                    </option>
                  ))}
                </select>
              </Field.Root>

              <Field.Root>
                <Field.Label>Date</Field.Label>
                <Input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </Field.Root>

              <HStack gap={4}>
                <Field.Root>
                  <Field.Label>Start time</Field.Label>
                  <Input
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    style={{ width: "100%", padding: "0.5rem", borderRadius: "0.375rem", border: "1px solid #CBD5E0" }}
                  />
                </Field.Root>

                <Field.Root>
                  <Field.Label>Duration</Field.Label>
                  <select
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                    style={{ width: "100%", padding: "0.5rem", borderRadius: "0.375rem", border: "1px solid #CBD5E0" }}
                  >
                    <option value="">Select duration</option>
                    {durationOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </Field.Root>
              </HStack>

              <Separator />

              <Box
                p={4}
                bg="gray.50"
                borderRadius="lg"
                border="1px solid"
                borderColor="gray.200"
              >
                <Text fontSize="sm" color="gray.500" mb={2}>
                  Preview
                </Text>
                <Flex align="center">
                  <Box
                    w="4px"
                    h="60px"
                    bg="green.400"
                    borderRadius="full"
                    mr={3}
                  />
                  <Box>
                    <Text fontWeight="bold">{title || "Task Title"}</Text>
                    <Text fontSize="sm" color="gray.600">
                      {date || "YYYY-MM-DD"} · {startTime || "HH:MM"}{" "}
                      {previewEndTime ? `- ${previewEndTime}` : ""} ·{" "}
                      {assignedTo || "Assignee"} · {location || "Location"}
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </VStack>
          </Dialog.Body>

          <Dialog.Footer>
            <HStack>
              <Button bg="red.500" onClick={onClose}>
                <HStack gap="2">
                  <CloseCircle size="18" />
                  <Text>Cancel</Text>
                </HStack>
              </Button>

              <Button
                bg="#5653FC"
                onClick={handleCreate}
                disabled={!isFormValid()}
              >
                <HStack gap="2">
                  <Add size="18" />
                  <Text>Create Roster</Text>
                </HStack>
              </Button>
            </HStack>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
}
