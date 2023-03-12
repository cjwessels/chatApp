import React, { useState, useEffect, useRef } from "react";

import ChatMessage from "./ChatMessage";

const style = {
  main: `flex flex-col p-[10px] relative`,
};

const Chat = () => {
  const scroll = useRef();
  return (
    <>
      <main className={style.main}>
        <ChatMessage />
      </main>
      <span ref={scroll}></span>
    </>
  );
};

export default Chat;
