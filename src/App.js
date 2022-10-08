import "./App.css";
import image from "./image/chatbot.jpg";
import { useState, useRef } from "react";

function App() {
  const humanMessage = useRef();
  const botmessage = useRef();
  const input = useRef();

  const date = new Date();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [time, setTime] = useState(`${hours}:${seconds}`);
  const [dateTime, setDateTime] = useState(
    `${days[day]}, ${months[month]} ${year}`
  );

  const checkStatus = (e) => {
    let isActive = true;
    if (dateTime) {
      isActive = false;
    }

    const status = document.querySelector(".status");
    if (isActive === true) {
      status.innerHTML = "Online";
      status.style.color = "lightgreen";
    } else {
      status.innerHTML = "Offline";
      status.style.color = "red";
    }
  };
  const handleInput = () => {
    const botMessage = document.querySelector("#message1");
    const userMessage = document.querySelector("#message2");
    const inputRef = input.current;
    const getHumanMessage = humanMessage.current;
    const getBotMessage = botmessage.current;

    let wrongWords = [
      "Fuck|fuck|idiot|stupid|useless|bitch|fuck you|moron|fuck off",
    ];
    let words = new RegExp(wrongWords);
    if (words.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Writing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "Don't use these words. They are not allowed.";
        inputRef.value = "";
      }, 2000);
    }

    let welcome = [
      "hi|hello|Hello|hey|yo|whats up|howdy|greetings|good morning|good afternoon|good evening",
    ];
    let words2 = new RegExp(welcome);
    if (words2.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Writing...";
      setTimeout(() => {
        getBotMessage.innerText = "Hello!👋 Nice to meet you! ";
        status.innerText = "Online";
        status.style.color = "lightgreen";
        inputRef.value = "";
      }, 2000);
    }

    let goodBye = ["bye|Bye|goodbye|see you later|cya|goodnight|goodbye"];
    let words3 = new RegExp(goodBye);
    if (words3.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Writing...";
      setTimeout(() => {
        getBotMessage.innerText = "Bye, have a nice day";
        inputRef.value = "";
      }, 2000);
      setTimeout(() => {
        status.innerText = "Offline";
        status.style.color = "red";
      }, 5000);
    }

    let thanks = [
      "Thanks|thanks|thank you|thank you very much|Thank you very much",
    ];
    let words4 = new RegExp(thanks);
    if (words4.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Writing...";
      setTimeout(() => {
        getBotMessage.innerText = "You are welcome 😀";
        inputRef.value = "";
      }, 2000);
    }

    let howAreYou = [
      "How are you|how are you doing|how are you doing today|how are you doing today|How are you|how are you",
    ];
    let words5 = new RegExp(howAreYou);
    if (words5.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Writing...";
      setTimeout(() => {
        getBotMessage.innerText = "I am fine. Thank you! 🙂";
        status.innerText = "Online";
        status.style.color = "lightgreen";
        inputRef.value = "";
      }, 2000);
    }

    let good = [
      "That's good|Sound nice|that sounds awesome|that sounds great|Great|great|sounds great|that's sounds good|Nice|nice",
    ];
    let words6 = new RegExp(good);
    if (words6.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Writing...";
      setTimeout(() => {
        getBotMessage.innerText = "Yes great! 😃 ";
        inputRef.value = "";
      }, 1000);
    }

    let response = [
      "I'm fine|I am fine|I am fine today|I am fine today|i'm fine|i'm ok|I'm fine|I'm ok|I'm good|i'm good",
    ];
    let words7 = new RegExp(response);
    if (words7.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Writing...";
      setTimeout(() => {
        getBotMessage.innerText = "I am glad that you are doing well 👍";
        inputRef.value = "";
      }, 2000);
    }

    let whatName = [
      "What's your name|what's your name|what's your name?|What is your name|what is your name|what is your name?|Whats your name|whats your name",
    ];
    let words8 = new RegExp(whatName);
    if (words8.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Writing...";
      setTimeout(() => {
        getBotMessage.innerText = "My name is React ChatBot 🤖";
        inputRef.value = "";
      }, 2000);
    }

    let creator = [
      "Who is your creator?|who is your creator?|Who is the creator this bot?|who is the creator of this bot?|Who made you?|who made you?|Who is your maker?|Who made you?|who is your maker?|who is your creator?|Who is your creator?",
    ];
    let words9 = new RegExp(creator);
    if (words9.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Writing...";
      setTimeout(() => {
        getBotMessage.innerText = "My creator is d.prwn! I love him! ❤";
        inputRef.value = "";
      }, 2000);
    }

    let tellSomething = [
      "Tell me something|tell me something|Tell something|tell something",
    ];
    let words10 = new RegExp(tellSomething);
    if (words10.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Writing...";
      setTimeout(() => {
        getBotMessage.innerText = "I'll tell you that I like you! 😉";
        inputRef.value = "";
      }, 2000);
    }

    let tellJoke = [
      "Tell me a joke|tell me a joke|Tell joke|tell joke|Joke|joke",
    ];
    let words11 = new RegExp(tellJoke);
    if (words11.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Writing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "What did Yoda say when he saw himself in 4k? HDMI. 😂";
        inputRef.value = "";
      }, 2000);
    }

    let ageAsking = [
      "What's your age?|what's your age?|What is your age?|what is your age?|How old are you?|how old are you?",
    ];
    let words12 = new RegExp(ageAsking);
    if (words12.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Writing...";
      setTimeout(() => {
        getBotMessage.innerText = "I am immortal, I live in cyberspace.";
        inputRef.value = "";
      }, 2000);
    }

    getHumanMessage.innerText = inputRef.value;
  };
  return (
    <div className="App" onLoad={checkStatus}>
      <div className="wrapper">
        <div className="content">
          <div className="header">
            <div className="img">
              <img src={image} alt="" />
            </div>
            <div className="right">
              <div className="name">REACT CHATBOT</div>
              <div className="status">Online</div>
            </div>
          </div>
          <div className="main">
            <div className="main_content">
              <div className="messages">
                <div
                  className="bot-message"
                  id="message1"
                  ref={botmessage}
                ></div>
                <div
                  className="human-message"
                  id="message2"
                  ref={humanMessage}
                ></div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="btm">
              <div className="input">
                <input
                  type="text"
                  id="input"
                  placeholder="Your message..."
                  ref={input}
                />
              </div>
              <div className="btn">
                <button onClick={handleInput}>
                  <i className="fa-solid fa-comment-arrow-up"></i> Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
