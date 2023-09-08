
const selectUserNumber = document.querySelector("#users");

const randomFolks = document.querySelector(".random-peeps");

const getData = async function (numUsers) {
    console.log(`Fetching data for ${numUsers} users...`); // Debugging statement
    const usersRequest = await fetch('https://randomuser.me/api?results=${numUsers}');
       const data = await usersRequest.json();
       console.log(data);


       const userResults = data.results;
       
       const displayUsers = function (userResults) {
                randomFolks.innerHTML = "";

            for (const user of userResults ) {
                const country = user.location.country;
                 const name = user.name.first;
                const imageUrl = user.picture.medium;
               
   console.log(imageUrl);
                 const userDiv = document.createElement("div");
                    userDiv.innerHTML = `
                        <h3>${name}</h3>
                        <p>${country}</p>
                        <img src=${imageUrl} alt="User avatar" />`;
                
                        randomFolks.append(userDiv); }
   
         };


displayUsers(userResults);

};
//initial data load
getData(1);

// Select the element with the class "num-users"
const numUsersDiv = document.querySelector('.num-users');

// Remove the "hide" class from the element
numUsersDiv.classList.remove('hide');

selectUserNumber.addEventListener('change', function (e) {
      const numUsers = e.target.value;
     // console.log(numUsers);
      getData(numUsers);
});