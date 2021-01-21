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

// Part 4

const main = () => {
  console.log(myname);
  // Part 2
  console.log(document);
};

if (document.readyState === "loading") {
  console.log("loading the page");
} else {
  console.log("load success");
}
