// const promiseForIntern = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("no internship");
//   }, 5000);
//   // reject("No Internship")
// });

// console.log(promiseForIntern);

// promiseForIntern
//   .then((value) => {
//     console.log(value);
//     console.log(promiseForIntern);
//   })
//   .catch((err) => {
//     console.log(err);
//     console.log(promiseForIntern);
//   });

const getUserData = () => {
  return { id: 2, name: "basnata" };
};

const user = getUserData();
// const getUserData = () => {
//   return new Promise((resolve, reject) => {
//     resolve({ id: 1, name: "basanta", age: 10 });
//   });
// };

// getUserData()
//   .then((user) => {
//     console.log(user)
//     return {id: 2, name: 'uchit'}
//   }).then(value => console.log(value))
//   .catch((err) => {});
// fetch("https://api.github.com/users/Basanta-Kc").then((res) => {
//   res.json().then((data) => {
//     console.log(data);
//   });
// });

// call back hell
fetch("https://api.github.com/users/Basanta-Kc")
  .then((res) => {
    res.json().then((userData) => {
      console.log({ userData });
      const followerUrlApi = userData.followers_url;
      fetch(followerUrlApi).then((res) => {
        res.json().then((followersData) => {
          console.log(followersData);
        });
      });
    });
  })
  .catch((err) => {
    console.log(err);
  });

async function getDataN() {
  return "yes"; // resolve(yes)
}

getDataN().then((data) => console.log(data));

const getData = async () => {
  try {
    const res = await fetch("https://api.github.com/users/Basanta-Kc");
    const user = await res.json();
    const followersRes = await fetch(user.followers_url);
    const followers = await followersRes.json();
    console.log({ user, followers });
  } catch (error) {
    // error halnding
    console.log(err);
  }
};

getData();
