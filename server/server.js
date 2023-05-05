import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";
import fetch from "node-fetch";

dotenv.config();
console.log(process.env.OPENAI_API_KEY);
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).send({
    message: "Hello from ChatGPT!",
  });
});

app.post("/chat", async (req, res) => {
  try {
    const question = req.body.question;
    const DEFAULT_PARAMS = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are ChatGPT, a large language model trained by OpenAI. Answer in detail",
        },
        { role: "user", content: question },
      ],
    };

    const params = { ...DEFAULT_PARAMS };
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(process.env.OPENAI_API_KEY),
      },
      body: JSON.stringify(params),
    };
    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      requestOptions
    );
    const data = await response.json();
    var result = data.choices[0].message.content;

    // const response = await openai.ChatCompletion.create({
    //   // model: "text-davinci-003",
    //   // prompt:`Respond to questions in a friendly chat style.The question is: ${question}. Remove un-necessary question marks.`,
    //   // temperature: 0.7,
    //   // max_tokens: 2048,
    //   // top_p: 1,
    //   // frequency_penalty: 0,
    //   // presence_penalty: 0,
    //   // stop: [" AI:"," Human:"],
    //   model: 'gpt-3.5-turbo',
    //   messages: [
    //       {
    //           role: "system", content:
    //               `You are ChatGPT, a large language model trained by OpenAI. Answer in detail.\n`
    //       },
    //       { role: "user", content: prompt }
    //   ]
    // });

    res.status(200).send({
      answer: result,
      question: question,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send(error || "Something went wrong");
  }
});

app.listen(3000, () =>
  console.log("AI server started on http://localhost:3000")
);
