import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Input,
} from "@nextui-org/react";
import { useState } from "react";
function App() {
  const [word, setWord] = useState("");
  const [vowelCollect, setVowelCollect] = useState("");
  const [consonantCollect, setConsonantCollect] = useState("");

  const takeVowel = (word) => {
    let lowerCase = word.toLowerCase();
    let trim = lowerCase;
    let joinAfterSplitBySpaces = "";
    if (trim.includes(" ")) {
      // console.log("space included");
      let splitBySpaces = trim.split(" ");
      joinAfterSplitBySpaces = splitBySpaces.join("");
    }
    // console.log(joinAfterSplitBySpaces);
    let vowelFilteredArray = joinAfterSplitBySpaces.split("").filter((item) => {
      return (
        item === "a" ||
        item === "i" ||
        item === "u" ||
        item === "e" ||
        item === "o"
      );
    });
    // console.log(vowelFilteredArray);
    let vowelSorted = [];
    let check = [];
    let skip = false;
    for (let i = 0; i < vowelFilteredArray.length; i++) {
      // console.log(vowelFilteredArray[i]);
      // ----- Checking Stage -----
      for (let j = 0; j < vowelFilteredArray.length; j++) {
        if (check[j] === vowelFilteredArray[i]) {
          skip = true;
          // console.log("skip");
          break;
        }
      }
      if (skip) {
        skip = false;
        continue;
      }
      check.push(vowelFilteredArray[i]);
      for (let j = i + 1; j < vowelFilteredArray.length; j++) {
        // if (i === j) {
        //   continue;
        // } else
        if (vowelFilteredArray[j] === vowelFilteredArray[i]) {
          // vowelSorted.push(vowelFilteredArray[j]);
          check.push(vowelFilteredArray[j]);
        }
      }
    }
    // console.log(check);
    setVowelCollect(check.join(""));
    // console.log(vowelSorted);
    // console.log(trim);
    // console.log(splitSpaces);
  };

  const takeConsonant = (word) => {
    let lowerCase = word.toLowerCase();
    let trim = lowerCase;
    let joinAfterSplitBySpaces = "";
    if (trim.includes(" ")) {
      // console.log("space included");
      let splitBySpaces = trim.split(" ");
      joinAfterSplitBySpaces = splitBySpaces.join("");
    }
    console.log(joinAfterSplitBySpaces);
    let consonantFilteredArray = joinAfterSplitBySpaces
      .split("")
      .filter((item) => {
        return (
          item !== "a" &&
          item !== "i" &&
          item !== "u" &&
          item !== "e" &&
          item !== "o"
        );
      });
    console.log(consonantFilteredArray);
    let vowelSorted = [];
    let check = [];
    let skip = false;
    for (let i = 0; i < consonantFilteredArray.length; i++) {
      console.log(consonantFilteredArray[i]);
      // ----- Checking Stage -----
      for (let j = 0; j < consonantFilteredArray.length; j++) {
        if (check[j] === consonantFilteredArray[i]) {
          skip = true;
          console.log("skip");
          break;
        }
      }
      if (skip) {
        skip = false;
        continue;
      }
      check.push(consonantFilteredArray[i]);
      for (let j = i + 1; j < consonantFilteredArray.length; j++) {
        // if (i === j) {
        //   continue;
        // } else
        if (consonantFilteredArray[j] === consonantFilteredArray[i]) {
          // vowelSorted.push(vowelFilteredArray[j]);
          check.push(consonantFilteredArray[j]);
        }
      }
    }
    console.log(check);
    setConsonantCollect(check.join(""));
    // console.log(vowelSorted);
    // console.log(trim);
    // console.log(splitSpaces);
  };

  function handleSubmit(event) {
    console.log(word);
    event.preventDefault();
    takeVowel(word);
    takeConsonant(word);
  }
  return (
    <>
      <Navbar isBordered className="bg-blue-500">
        <NavbarBrand>
          <p className="font-inter font-semibold text-white">
            Encik Doneis Valsamidis
          </p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem isActive>
            <h1
              className="font-inter font-semibold  text-white"
              href="#"
              aria-current="page"
            >
              Sort Character
            </h1>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex"></NavbarItem>
          <NavbarItem></NavbarItem>
        </NavbarContent>
      </Navbar>
      <div className=" flex flex-row flex-wrap p-10 gap-10 bg-gradient-to-b from-blue-500 to-sky-500 w-screen h-screen">
        <div className="flex flex-col p-5 border-solid border-2 gap-5 border-white justify-center items-center rounded-2xl">
          <h1 className="text-lg font-inter font-semibold text-white">
            Input :
          </h1>
          <form
            className="flex flex-col gap-2 justify-center items-center"
            onSubmit={handleSubmit}
          >
            <Input
              variant="bordered"
              color="secondary"
              type="text"
              className="w-80 text-white font-inter font-semibold"
              label="Write Your Word"
              value={word}
              onChange={(e) => setWord(e.target.value)}
            />

            <Button
              type="submit"
              className="bg-transparent border-solid border-2 text-white font-inter font-semibold hover:bg-white hover:text-sky-800"
            >
              Submit
            </Button>
          </form>
        </div>
        <div className="flex flex-col p-5 border-solid border-2 gap-5 border-white justify-center items-center rounded-2xl">
          <h1 className="text-lg font-inter font-semibold text-white">
            Output :
          </h1>
          <h2 className="text-lg font-inter font-semibold text-white">
            Vowel Characters : {vowelCollect}
          </h2>
          <h2 className="text-lg font-inter font-semibold text-white">
            Consonant Characters : {consonantCollect}
          </h2>
        </div>
      </div>
    </>
  );
}

export default App;
