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
  const write1=()=> {
    var a = document.getElementsByClassName("ques")[0].innerHTML;
    console.log(a);
    document.getElementsByClassName("in")[0].value=a;
    handleSend()
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
      .post("http://localhost:3000/chat", {
        question,
      })
      .then((response) => {
        updateQna(AI, response.data.answer);
      })
      .finally(() => {
        setLoading(false);
      });
      document.getElementsByClassName("in")[0].value="";
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
      <div class="">
        <span class="ques" onClick={()=> {write1()}}>
          What is Twitter and how does it work?
        </span>
      </div>
      <div>
        <div class="c">
          <input type="checkbox" id="faq-1" />
          <h1>
            <label for="faq-1">Audience Building Prompts</label>
          </h1>

          <div class="p">
            <p>How do I create a Twitter account?</p>
          </div>
          <div class="p">
            <p>How do I make a viral tweet?</p>
          </div>
          <div class="p">
            <p>What are hashtags and how do I use them on Twitter?</p>
          </div>
          <div class="p">
            <p>How do I increase my Twitter followers?</p>
          </div>

          <div class="p">
            <p>
              What are the first steps to take when setting up an Instagram
              account?
            </p>
          </div>
          <div class="p">
            <p>How do I create an Instagram bio that attracts followers?</p>
          </div>
          <div class="p">
            <p>
              What type of content should I post to grow my Instagram following?
            </p>
          </div>
          <div class="p">
            <p>
              How often should I post on Instagram to keep my followers engaged?
            </p>
          </div>
          <div class="p">
            <p>How do I use hashtags to increase my reach on Instagram?</p>
          </div>

          <div class="p">
            <p>What is TikTok and how does it work?</p>
          </div>
          <div class="p">
            <p>How do I create a TikTok account?</p>
          </div>
          <div class="p">
            <p>How do I make a TikTok video?</p>
          </div>
          <div class="p">
            <p>What are some popular TikTok video formats?</p>
          </div>
          <div class="p">
            <p>How do I edit my TikTok videos?</p>
          </div>

          <div class="p">
            <p>How do I set up a YouTube account?</p>
          </div>
          <div class="p">
            <p>
              What type of content should I create to get followers on YouTube?
            </p>
          </div>
          <div class="p">
            <p>
              How often should I upload videos to YouTube to keep my followers
              engaged?
            </p>
          </div>
          <div class="p">
            <p>
              How do I optimize my YouTube video titles, descriptions, and tags
              for search?
            </p>
          </div>
          <div class="p">
            <p>
              How do I create a YouTube channel trailer to attract followers?
            </p>
          </div>
        </div>
        <div class="c">
          <input type="checkbox" id="faq-2" />
          <h1>
            <label for="faq-2">Copywriting Prompts</label>
          </h1>

          <div class="p">
            <p>What is the AIDA model and how can it be used in copywriting?</p>
          </div>
          <div class="p">
            <p>How can I use the PAS formula to create persuasive copy?</p>
          </div>
          <div class="p">
            <p>
              What is the difference between a feature and a benefit in
              copywriting?
            </p>
          </div>
          <div class="p">
            <p>
              How can I use storytelling in my copywriting to connect with my
              audience?
            </p>
          </div>
          <div class="p">
            <p>
              What are some common copywriting formulas and how can they be
              used?
            </p>
          </div>

          <div class="p">
            <p>
              What are some best practices for writing headlines in copywriting?
            </p>
          </div>
          <div class="p">
            <p>
              How can I use emotional appeals in my copywriting to create a
              strong connection with my audience?
            </p>
          </div>
          <div class="p">
            <p>
              What is the difference between direct response copywriting and
              brand copywriting?
            </p>
          </div>
          <div class="p">
            <p>
              How can I use scarcity and urgency in my copywriting to increase
              conversions?
            </p>
          </div>
        </div>
        <div class="c">
          <input type="checkbox" id="faq-3" />
          <h1>
            <label for="faq-3">High Ticket Prompts</label>
          </h1>

          <div class="p">
            <p>What is the AIDA model and how can it be used in copywriting?</p>
          </div>
          <div class="p">
            <p>How can I use the PAS formula to create persuasive copy?</p>
          </div>
          <div class="p">
            <p>
              What is the difference between a feature and a benefit in
              copywriting?
            </p>
          </div>
          <div class="p">
            <p>
              How can I use storytelling in my copywriting to connect with my
              audience?
            </p>
          </div>
          <div class="p">
            <p>
              What are some common copywriting formulas and how can they be
              used?
            </p>
          </div>

          <div class="p">
            <p>
              What are some best practices for writing headlines in copywriting?
            </p>
          </div>
          <div class="p">
            <p>
              How can I use emotional appeals in my copywriting to create a
              strong connection with my audience?
            </p>
          </div>
          <div class="p">
            <p>
              What is the difference between direct response copywriting and
              brand copywriting?
            </p>
          </div>
          <div class="p">
            <p>
              How can I use scarcity and urgency in my copywriting to increase
              conversions?
            </p>
          </div>
        </div>
        <div class="c">
          <input type="checkbox" id="faq-4" />
          <h1>
            <label for="faq-4">Email Marketing Prompts</label>
          </h1>

          <div class="p">
            <p>
              What is email list building and why is it important for a
              business?
            </p>
          </div>
          <div class="p">
            <p>How can I grow my email list quickly and effectively?</p>
          </div>
          <div class="p">
            <p>How can I get inspiration for email template designs?</p>
          </div>
          <div class="p">
            <p>
              How can I use a mobile-responsive design for my email templates?
            </p>
          </div>
          <div class="p">
            <p>What is a subject line in email marketing?</p>
          </div>
          <div class="p">
            <p>What is a subject line in email marketing?</p>
          </div>
          <div class="p">
            <p>
              Why is subject line optimization important in email marketing?
            </p>
          </div>
          <div class="p">
            <p>What is clear and effective copy in email marketing?</p>
          </div>
          <div class="p">
            <p>
              How can I write clear and effective copy for my email marketing
              campaigns?
            </p>
          </div>
          <div class="p">
            <p>What is email performance and why is it important to measure?</p>
          </div>
          <div class="p">
            <p>How can I track the success of my email campaigns?</p>
          </div>
        </div>
      </div>
      {/* <div >
        <h2 class="example-title">Search Ideas</h2>
        <p class="example-prompt">What is chatgpt and what functionalities it can perform</p>
        <p class="example-prompt">What is chatgpt</p>
        <p class="example-prompt">What is chatgpt</p>
        <p class="example-prompt">What is chatgpt</p>
        <p class="example-prompt">What is chatgpt</p>
        <p class="example-prompt">What is chatgpt</p>
      </div> */}
      <div class="container">
        <div>
          <img
            src={webLogo}
            alt=""
            width="200px"
            height="50px"
            // class="avtar"
          />
          <div class="chats">
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
    </main>
  );
}

export default App;
