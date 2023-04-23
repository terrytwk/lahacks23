import { Client, Account, Databases, ID } from "appwrite";
import { v4 as uuidv4 } from "uuid";

const client = new Client()
  .setEndpoint("http://localhost/v1") // Your API Endpoint
  .setProject("644414243d79643006c7"); // Your project ID

const userSignup = async (email, password) => {
  const account = new Account(client);

  const promise = await account.create(ID.unique(), email, password);

  return promise.userId;
};

const userLogin = async (email, password) => {
  const account = new Account(client);

  console.log("user_login:", email, password);

  const promise = await account.createEmailSession(email, password);

  return promise.userId;
};

const getAllPosts = async () => {
  const databases = new Databases(client);

  const allPosts = await databases.listDocuments(
    "64454aa2b630bda12605", // database_id
    "64454d6ccaf31d83bf13" // collection_id
  );

  return allPosts;
};

const getMyPosts = async (userId) => {
  const allPosts = await getAllPosts();

  const myPosts = allPosts.filter((p) => p.userId === userId);

  return myPosts;
};

const getParentItinerary = async (myPost) => {
  const parent_itinerary = await databases.getDocument(
    "64454aa2b630bda12605",
    "64454aa2b630bda12605",
    myPost.itinerary_id
  );

  return parent_itinerary;
};

const submitPost = async (itinerary_id, description, created_by) => {
  const databases = new Databases(client);

  const postId = uuidv4();

  const promise = await databases.createDocument(
    "64454aa2b630bda1260",
    "64454d6ccaf31d83bf13",
    postId,
    { itinerary_id, description, created_by, likes: 0 }
  );

  return promise;
};

const deletePost = async (postId) => {
  const databases = new Databases(client);

  const promise = await databases.deleteDocument(
    "64454aa2b630bda1260",
    "64454d6ccaf31d83bf13",
    postId
  );

  return promise;
};

export {
  userSignup,
  userLogin,
  getAllPosts,
  getMyPosts,
  getParentItinerary,
  submitPost,
  deletePost,
};
