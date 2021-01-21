// Part 1
const myname = "nikolas";

// Part 3
// one function does everything
function doEverything() {
  console.log("everything");
}

// check if elements are still loading
if (document.readyState === "loading") {
  // if elements are still loading,
  // wait for the DOMContentLoaded event
  document.addEventListener("DOMContentLoaded", doEverything);
} else {
  // if elements are already loaded,
  // run the function now
  doEverything();
}

// Part 4 Listening

const main = () => {
  //Part 2
  console.log(myname);
  console.log(document);

  // Part 5 Quering

  const changeMe = document.querySelector("button");
  console.log("here", changeMe);

  // Part 6 Interacting
  const onClick = (e) => console.log(e);
  changeMe.addEventListener("click", onClick);
};

main();

if (document.readyState === "loading") {
  console.log("loading the page");
} else {
  console.log("load success");
}
