import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import { Flex, Text, Button } from '@radix-ui/themes';
import LoadingBar from "./components/common/LoadingBar/LoadingBar";

function App() {
  // const [greetMsg, setGreetMsg] = useState("");
  // const [name, setName] = useState("");

  // async function greet() {
  //   // Learn more about Tauri commands at https:/setGreetMsg/tauri.app/v1/guides/features/command
  //   setGreetMsg(await invoke("greet", { name }));
  // }

  return (
    <main>
      <LoadingBar type="knight-rider"></LoadingBar>
      {/* <Flex direction="column" gap="2">
      <Text>Hello from Radix Themes :)</Text>
      <Button>Let's go</Button>
    </Flex> */}
    </main>
  );
}

export default App;
