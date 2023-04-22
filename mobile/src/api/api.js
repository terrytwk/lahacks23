import { Client, Account, ID } from "appwrite";

const client = new Client()
  .setEndpoint("http://localhost/v1") // Your API Endpoint
  .setProject("644414243d79643006c7"); // Your project ID

const user_signup = async (email, password) => {
  const account = new Account(client);

  const promise = await account.create(ID.unique(), email, password);

  return promise;

  //   promise.then(
  //     function (response) {
  //       console.log(response); // Success
  //     },
  //     function (error) {
  //       console.log(error); // Failure
  //     }
  //   );
};

const user_login = async (email, password) => {
  const account = new Account(client);

  console.log("user_login:", email, password);

  const promise = account.createEmailSession(email, password);

  promise.then(
    function (response) {
      console.log("success:", response); // Success
    },
    function (error) {
      console.log("err: ", error); // Failure
    }
  );
};

export { user_signup, user_login };
