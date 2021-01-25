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

// Mutation observers
// Select the node that will be observed for mutations
const targetNode = document.getElementById("some-id");

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = function (mutationsList, observer) {
  // Use traditional 'for loops' for IE 11
  for (const mutation of mutationsList) {
    if (mutation.type === "childList") {
      console.log("A child node has been added or removed.");
    } else if (mutation.type === "attributes") {
      console.log("The " + mutation.attributeName + " attribute was modified.");
    }
  }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

// Later, you can stop observing
observer.disconnect();

// Event listeners
// Function to change the content of t2
function modifyText() {
  const t2 = document.getElementById("t2");
  if (t2.firstChild.nodeValue == "three") {
    t2.firstChild.nodeValue = "two";
  } else {
    t2.firstChild.nodeValue = "three";
  }
}

// Add event listener to table
const el = document.getElementById("outside");
el.addEventListener("click", modifyText, false);
