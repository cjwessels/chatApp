import { sendEmailVerification } from "firebase/auth";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  // QuerySnapshot,
} from "firebase/firestore";
import React, { useState, useEffect, useRef } from "react";
import { db } from "../firebase";

import ChatMessage from "./ChatMessage";
import SendMessage from "./SendMessage";

const style = {
  main: `flex flex-col p-[10px] relative`,
};

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, [messages]);

  return (
    <>
      <main className={style.main}>
        {messages &&
          messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
      </main>
      <SendMess
      <span ref={scroll}></span>
    </>
  );
};

export default Chat;
