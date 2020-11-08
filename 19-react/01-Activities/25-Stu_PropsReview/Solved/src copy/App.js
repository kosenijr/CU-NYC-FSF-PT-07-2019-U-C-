import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import SpongeBobCard from "./components/SpongeBobCard";
import SquidwardCard from "./components/SquidwardCard";
import MrKrabsCard from "./components/MrKrabsCard";
import FriendsCard from "./components/FriendsCard";
import Friends from "./friends.json";

function App() {
  return (
    <Wrapper>
      <Title>Friends List</Title>
      {Friends.map((element, index) =>
        <FriendsCard key={index} >{element}</FriendsCard>)}
    </Wrapper>
  );
}

export default App;
