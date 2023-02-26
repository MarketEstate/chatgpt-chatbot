import { useState } from "react";
import reactLogo from "./assets/react.svg";
import webLogo from "./assets/logo.png";
import chatLogo from "./assets/chat.png";
import userLogo from "./assets/user.png";
import "./App.css";
import { useRef } from "react";
import axios from "axios";

const YOU = "you";
const AI = "ai";
function App() {
  const inputRef = useRef();
  const [qna, setQna] = useState([
    // { from: YOU, value: "FROM ME" },
    // { from: AI, value: ["1 MESSG FROM AI", "2 MESSG FROM AI"] },
  ]);
  const write = (i) => {
    var a = document.getElementsByClassName("question")[i].innerHTML;
    document.getElementsByClassName("in")[0].value = a;
    handleSend();
    // document.getElementsByClassName("in")[0].value="";
    // inputRef.current.value=a
  };

  const [loading, setLoading] = useState(false);
  const updateQna = (from, value) => {
    setQna((qna) => [...qna, { from, value }]);
  };
  const handleSend = () => {
    const question = inputRef.current.value;
    updateQna(YOU, question);
    // setQna([...qna, { from: YOU, value: question }]);
    // console.log({question})
    setLoading(true);
    axios
      .post("https://chatbot-server-090w.onrender.com/chat", {
        question,
      })
      .then((response) => {
        updateQna(AI, response.data.answer);
        if (response) {
          // window.setInterval(function () {
          var elem = document.getElementById("chats");
          if (elem) {
            console.log(elem.scrollHeight);
            elem.scrollTop = elem.scrollHeight*2;
          }
          // }, 1000);
        }
      })
      .finally(() => {
        setLoading(false);
      });
    document.getElementsByClassName("in")[0].value = "";
  };

  const renderContent = (qna) => {
    const value = qna.value;
    if (Array.isArray(value)) {
      return value.map((v) => <p className="message-text">{v}</p>);
    }
    return <p className="message-text">{value}</p>;
  };
  return (
    <main class="main-container">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-md-5 col-lg-5">
            <div class="accordion" id="accordionExample">
              <h3
                style={{
                  backgroundColor: "black",
                  color: "white",
                  padding: "0.2rem 0.5rem",
                }}
              >
                EXAMPLE PROMPTS
              </h3>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    Audience Building Prompts
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div
                    class="accordion-body question"
                    onClick={() => {
                      write(0);
                    }}
                  >
                    How do I make a viral tweet?
                  </div>
                  <div
                    class="accordion-body question"
                    onClick={() => {
                      write(1);
                    }}
                  >
                    How do I increase my Twitter followers?
                  </div>
                  <div
                    class="accordion-body question"
                    onClick={() => {
                      write(2);
                    }}
                  >
                    What type of content should I post to grow my Instagram
                    following?
                  </div>
                  <div
                    class="accordion-body question"
                    onClick={() => {
                      write(3);
                    }}
                  >
                    How do I edit my TikTok videos?
                  </div>
                  <div
                    class="accordion-body question"
                    onClick={() => {
                      write(4);
                    }}
                  >
                    How do I set up a YouTube account?
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Copywriting Prompts
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div
                    class="accordion-body question"
                    onClick={() => {
                      write(5);
                    }}
                  >
                    What is the AIDA model and how can it be used in
                    copywriting?
                  </div>
                  <div
                    class="accordion-body question"
                    onClick={() => {
                      write(6);
                    }}
                  >
                    What is the difference between a feature and a benefit in
                    copywriting?
                  </div>
                  <div
                    class="accordion-body question"
                    onClick={() => {
                      write(7);
                    }}
                  >
                    How can I use storytelling in my copywriting to connect with
                    my audience?
                  </div>
                  <div
                    class="accordion-body question"
                    onClick={() => {
                      write(8);
                    }}
                  >
                    What are some best practices for writing headlines in
                    copywriting?
                  </div>
                  <div
                    class="accordion-body question"
                    onClick={() => {
                      write(9);
                    }}
                  >
                    What is the difference between direct response copywriting
                    and brand copywriting?
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Email Marketing Prompts
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div
                    class="accordion-body question"
                    onClick={() => {
                      write(10);
                    }}
                  >
                    What is email list building and why is it important for a
                    business?
                  </div>
                  <div
                    class="accordion-body question"
                    onClick={() => {
                      write(11);
                    }}
                  >
                    How can I grow my email list quickly and effectively?
                  </div>
                  <div
                    class="accordion-body question"
                    onClick={() => {
                      write(12);
                    }}
                  >
                    How can I get inspiration for email template designs?
                  </div>
                  <div
                    class="accordion-body question"
                    onClick={() => {
                      write(13);
                    }}
                  >
                    What is a subject line in email marketing?
                  </div>
                  <div
                    class="accordion-body question"
                    onClick={() => {
                      write(14);
                    }}
                  >
                    How can I use a mobile-responsive design for my email
                    templates?
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-7 col-lg-7">
            <div class="container">
              <div>
                <img
                  src={webLogo}
                  alt=""
                  width="200px"
                  height="50px"
                  // class="avtar"
                />
                <div class="chats" id="chats">
                  {qna.map((qna) => {
                    if (qna.from == YOU) {
                      return (
                        <div class="send chat">
                          <img src={userLogo} alt="" class="avtar" />
                          <p>{renderContent(qna)}</p>
                        </div>
                      );
                    }
                    return (
                      <div class="recieve chat">
                        <img src={chatLogo} alt="" class="avtar" />
                        <p>{renderContent(qna)}</p>
                      </div>
                    );
                  })}
                  {loading && (
                    <div class="recieve chat">
                      <img src={chatLogo} alt="" class="avtar" />
                      <p>Typing...</p>
                    </div>
                  )}
                </div>
              </div>

              <div class="chat-input">
                <input
                  type="text"
                  ref={inputRef}
                  class="form-control col in"
                  placeholder="Type Something"
                />
                <button disabled={loading} class="btn" onClick={handleSend}>
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
