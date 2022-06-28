const myPromise = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => {
      resolve("I have succeeded");
    }, 1000);
  } else {
    reject("I have failed");
  }
});

myPromise
  .then((value) => value + "!!!!") // when success... => here .then wraps this new value in resolve promise
  .then((newValue) => console.log(newValue)) // can call the newly created value when promise resolved
  .catch((rejectValue) => console.log(rejectValue)); // when fail - "catch" the reject

// ASYNC AWAIT logic

const myAsyncFunction = async () => {
  try {
    const usersResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    // all code below this will AWAIT for usersResponse to resolve the promise
    const users = await usersResponse.json();
    // again - all code below ALSO AWAITS for users to exist
    const firstUser = users[0];
    console.log(firstUser);
  } catch (err) {
    console.log("My error message");
  }
};

console.log(myAsyncFunction);
