import React, { useState, useRef } from "react";
import axios from "axios";
import { AiOutlineSend, AiOutlineAudio } from "react-icons/ai";
import reactLogo from "./assets/react.svg";
import webLogo from "./assets/logo.png";
import chatLogo from "./assets/chat.png";
import userLogo from "./assets/user.png";
import "./App.css";

const YOU = "you";
const AI = "ai";

function App() {
  const inputRef = useRef();
  const [qna, setQna] = useState([]);
  const [loading, setLoading] = useState(false);

  const write = (i) => {
    const a = document.getElementsByClassName("question")[i].innerHTML;
    inputRef.current.value = a;
  };

  const updateQna = (from, value) => {
    setQna((qna) => [...qna, { from, value }]);
  };

  const handleSend = () => {
    const question = inputRef.current.value;
    updateQna(YOU, question);
    setLoading(true);
  
    // Show "typing..." message
    updateQna(AI, "typing...");
  
    axios
      .post("https://chatbot-server-090w.onrender.com/chat", {
        question,
      })
      .then((response) => {
        // Delay the response for better user experience
        setTimeout(() => {
          // Remove the "typing..." message from the Q&A list
          setQna((qna) => qna.slice(0, qna.length - 1));
  
          // Add the actual answer to the Q&A list
          updateQna(AI, response.data.answer);
          speak(response.data.answer); // Speak the answer

        }, 1000);
  
        const elem = document.getElementById("chats");
        if (elem) {
          elem.scrollTop = elem.scrollHeight * 2;
        }
      })
      .finally(() => {
        setLoading(false);
      });
  
    inputRef.current.value = "";
  };
  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    speechSynthesis.speak(utterance);
  };
  const handleSpeechToText = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = (event) => {
      const speechResult = event.results[0][0].transcript;
      inputRef.current.value = speechResult;
      recognition.stop();
      handleSend();
      // speak(speechResult)
    };
  };

  const renderContent = (qna) => {
    const { from, value } = qna;
  
    if (from === AI && value === "typing...") {
      return <p className="message-typing">Typing...</p>;
    }
  
    if (Array.isArray(value)) {
      return value.map((v, index) => (
        <p className="message-text" key={index}>
          {v}
        </p>
      ));
    }
  
    return <p className="message-text">{value}</p>;
  };

  return (
    <>
      <main className="main-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-5 col-lg-5">
            <div class="accordion" id="accordionExample">
                <h3
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    padding: "0.3rem 0.5rem",
                  }}
                >
                  Popular Real Estate Prompts
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
                      Real Estate Appraisal
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
                      You are hired to appraise a property that is located in a
                      high-crime area. How do you take this into account when
                      determining its value?
                    </div>
                    <div
                      class="accordion-body question"
                      onClick={() => {
                        write(1);
                      }}
                    >
                      You are asked to appraise a unique property that has no
                      comparable sales in the area. How do you go about
                      determining its value?
                    </div>
                    <div
                      class="accordion-body question"
                      onClick={() => {
                        write(2);
                      }}
                    >
                      You are appraising a property that has environmental
                      issues. How do you take this into account when determining
                      its value?
                    </div>
                    <div
                      class="accordion-body question"
                      onClick={() => {
                        write(3);
                      }}
                    >
                      You are appraising a property that is being sold as-is.
                      How do you take this into account when determining its
                      value?
                    </div>
                    <div
                      class="accordion-body question"
                      onClick={() => {
                        write(4);
                      }}
                    >
                      You are appraising a property that has a tenant in place.
                      How do you take this into account when determining its
                      value?
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
                      Residential Real Estate
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
                      A buyer's lender has denied their mortgage application.
                      What steps can you take to salvage the deal?
                    </div>
                    <div
                      class="accordion-body question"
                      onClick={() => {
                        write(6);
                      }}
                    >
                      A buyer has made an offer that is lower than the asking
                      price. How do you advise your seller on responding to the
                      offer?
                    </div>
                    <div
                      class="accordion-body question"
                      onClick={() => {
                        write(7);
                      }}
                    >
                      A seller is interested in selling their property "as-is".
                      How do you advise them on disclosing any potential issues
                      with the property to potential buyers?
                    </div>
                    <div
                      class="accordion-body question"
                      onClick={() => {
                        write(8);
                      }}
                    >
                      A seller has received an offer that is contingent on the
                      buyer selling their own property. How do you advise your
                      seller on responding to the offer?
                    </div>
                    <div
                      class="accordion-body question"
                      onClick={() => {
                        write(9);
                      }}
                    >
                      A seller is interested in using a real estate auction to
                      sell their property. How do you advise them on the risks
                      and benefits of this approach?
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
                      Property Management
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
                      Your team has just taken over a property with a high
                      tenant turnover rate. How do you analyze the situation and
                      come up with a plan to improve tenant retention?
                    </div>
                    <div
                      class="accordion-body question"
                      onClick={() => {
                        write(11);
                      }}
                    >
                      A tenant has submitted a maintenance request that requires
                      a specialized contractor. How do you vet and hire the
                      contractor, and ensure they provide quality work?
                    </div>
                    <div
                      class="accordion-body question"
                      onClick={() => {
                        write(12);
                      }}
                    >
                      A tenant has submitted a maintenance request for a
                      non-emergency issue outside of normal business hours. How
                      do you handle the request and ensure prompt resolution?
                    </div>
                    <div
                      class="accordion-body question"
                      onClick={() => {
                        write(13);
                      }}
                    >
                      Your property has a high vacancy rate. How do you analyze
                      the situation and develop a marketing plan to attract new
                      tenants?
                    </div>
                    <div
                      class="accordion-body question"
                      onClick={() => {
                        write(14);
                      }}
                    >
                      How do you handle difficult tenants, and what strategies
                      have you found to be most effective in resolving disputes?
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="col-12 col-md-7 col-lg-7">
              <div className="container">
                <div>
                  <img
                    src={webLogo}
                    alt=""
                    width="200px"
                    height="50px"
                  // className="avtar"
                  />
                  <div className="chats" id="chats">
                    {qna.map((message, index) => (
                      <div
                        key={index}
                        className={`chat ${message.from === YOU ? "send" : "receive"}`}
                      >
                        <img
                          src={message.from === YOU ? userLogo : chatLogo}
                          alt=""
                          className="avtar"
                        />
                        {Array.isArray(message.value) ? (
                          message.value.map((text, i) => (
                            <p key={i} className="message-text">
                              {text}
                            </p>
                          ))
                        ) : (
                          <p className="message-text">{message.value}</p>
                        )}
                      </div>
                    ))}
                    {loading && (
                      <div className="receive chat">
                        <img src={chatLogo} alt="" className="avtar" />
                        <p>Typing...</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="chat-input">
                  <input
                    type="text"
                    ref={inputRef}
                    className="form-control col in"
                    placeholder="Type Something"
                  />
                  <button disabled={loading} className="btn" onClick={handleSend}>
                    <AiOutlineSend />
                  </button>
                  <button className="btn" onClick={handleSpeechToText}>
                    <AiOutlineAudio />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="p-3">
        <a href="https://www.getmarketestate.com">Powered by Market Estate</a>
        <br />
        <br />
      </div>
    </>
  );
}

export default App;
