function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "chaicode", url: "https:///www.chai-code.com" });
    }, 5000);
  });
}

async function getUserData(params) {
  try {
    console.log("Fetching user Data.....");
    userData = await fetchUserData(); // It will wait here to proceed further till the promise resolve
    console.log("UserData :", userData);
  } catch (error) {}
}

getUserData();
console.log("Hello Hi!!!!!!");

/**
 * Calling multiple promises Promise.all()
 */

function fetchCommentData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Comment Data Fetched");
    }, 5000);
  });
}

async function getBlogData() {
  try {
    console.log("Fetching Blog Data");

    // const userData = await fetchUserData();
    // const commentData = await fetchCommentData();
    // console.log("UserData: ", userData);
    // console.log("CommentData: ", commentData);
    const [userData, commentData] = await Promise.all([
      fetchUserData(),
      fetchCommentData(),
    ]);
    console.log("UserData: ", userData);
    console.log("CommentData: ", commentData);
  } catch (error) {}
}

getBlogData();
console.log("Hello Hi!!!!!!");
