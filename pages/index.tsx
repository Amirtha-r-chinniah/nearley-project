import Nearley from "nearley";
import { useState } from "react";
import syntax from "../parser/syntax";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";

export default function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(false);

  function handleChangeOfInput(e: any) {
    console.log(e.target.value);
    setInput(e.target.value);

    const parser = new Nearley.Parser(Nearley.Grammar.fromCompiled(syntax));

    try {
      parser.feed(input);
      var parsedData = JSON.stringify(parser.results);
      if (parsedData && parsedData[0] === null && parsedData.length === 0)
        setResult(false);
      else if (parsedData && parsedData[0] && parsedData[0].length > 0)
        setResult(true);
    } catch (parseError) {
      console.log("Error at character " + parseError);
      setResult(false);
    }
  }
  return (
    <>
      <div className="border-2 drop-shadow-lg rounded-lg m-6 p-6 text-center">
        Movie Suggestions based on ratings
        <div className="m-6 p-6 text-center">
          {result && (
            <ThumbUpIcon
              sx={{ color: "#16a34a", height: "40px", width: "40px" }}
            ></ThumbUpIcon>
          )}
          {!result && (
            <ThumbDownIcon
              sx={{ color: "#dc2626", height: "40px", width: "40px" }}
            ></ThumbDownIcon>
          )}
          <TextField
            value={input}
            onInput={(e) => handleChangeOfInput(e)}
            sx={{ width: "35ch", paddingLeft: "5ch" }}
            variant="standard"
          />
          <button
            onClick={() => {
              setInput("");
            }}
          >
            <CloseIcon className="h-6 w-6"></CloseIcon>
          </button>
        </div>
      </div>
    </>
  );
}
