import { useState, useRef } from "react";
import { Container, Text, VStack, Button, Box } from "@chakra-ui/react";

const Index = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const startStopTimer = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
    } else {
      const startTime = Date.now() - time;
      timerRef.current = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 10);
    }
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (time) => {
    const milliseconds = ("0" + (Math.floor(time / 10) % 100)).slice(-2);
    const seconds = ("0" + (Math.floor(time / 1000) % 60)).slice(-2);
    const minutes = ("0" + (Math.floor(time / 60000) % 60)).slice(-2);
    return `${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="black" color="yellow">
      <VStack spacing={4}>
        <Box border="2px" borderColor="yellow" borderRadius="md" p={4}>
          <Text fontSize="4xl" fontFamily="monospace">
            {formatTime(time)}
          </Text>
        </Box>
        <Button colorScheme="yellow" onClick={startStopTimer}>
          {isRunning ? "Stop" : "Start"}
        </Button>
        <Button colorScheme="yellow" onClick={resetTimer}>
          Reset
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;