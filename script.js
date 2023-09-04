// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// Function to fetch data from a single API URL
async function fetchData(apiUrl) {
  const response = await fetch(apiUrl);
  return await response.json();
}

// Function to measure the time taken for Promise.all() and Promise.any()
async function comparePerformance() {
  const startTimeAll = Date.now();
  const promisesAll = apiUrls.map(fetchData);
  
  try {
    await Promise.all(promisesAll);
    const endTimeAll = Date.now();
    const timeTakenAll = endTimeAll - startTimeAll;
    document.getElementById("output-all").textContent = timeTakenAll + " ms";
  } catch (error) {
    console.error("Promise.all() failed:", error);
  }

  const startTimeAny = Date.now();
  const promisesAny = apiUrls.map(fetchData);
  
  try {
    await Promise.any(promisesAny);
    const endTimeAny = Date.now();
    const timeTakenAny = endTimeAny - startTimeAny;
    document.getElementById("output-any").textContent = timeTakenAny + " ms";
  } catch (error) {
    console.error("Promise.any() failed:", error);
  }
}

// Call the function to compare performance when the page loads
window.addEventListener("load", comparePerformance);
