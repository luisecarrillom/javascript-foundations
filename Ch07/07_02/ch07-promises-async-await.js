// File: ch07-promises-async-await.js
// Author: Luis Carrillo
// Practice with callbacks, Promises, and async/await

/**
 * Callbacks (Example with jQuery)
 */
console.log("Using jQuery with nested callbacks...");
jQuery.get("https://httpbin.org/get?data=1", function (response1) {
  console.log("Callback 1:", response1);

  jQuery.get("https://httpbin.org/get?data=2", function (response2) {
    console.log("Callback 2:", response2);

    jQuery.get("https://httpbin.org/get?data=3", function (response3) {
      console.log("Callback 3:", response3);
    });
  });
});

/**
 * Promises (using axios)
 */
console.log("\nUsing Promises with axios...");
axios
  .get("https://httpbin.org/get")
  .then(function (response1) {
    console.log("Promise 1:", response1);
    return axios.get("https://httpbin.org/get");
  })
  .then(function (response2) {
    console.log("Promise 2:", response2);
    return axios.get("https://httpbin.org/get");
  })
  .then(function (response3) {
    console.log("Promise 3:", response3);
  });

/**
 * Async / Await
 */
console.log("\nUsing async/await...");

async function getOneThing() {
  const response = await axios.get("https://httpbin.org/get");
  console.log("Async response (one):", response);
}

async function getLotsOfThings() {
  const r1 = await axios.get("https://httpbin.org/get?req=1");
  const r2 = await axios.get("https://httpbin.org/get?req=2");
  const r3 = await axios.get("https://httpbin.org/get?req=3");

  console.log("Async response 1:", r1);
  console.log("Async response 2:", r2);
  console.log("Async response 3:", r3);
}

// Trigger both functions after 3 seconds to avoid too many requests at once
setTimeout(() => {
  getOneThing();
  getLotsOfThings();
}, 3000);
