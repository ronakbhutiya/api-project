var h = document.querySelector(".users");
const heading = document.querySelector("h2");
const input = document.querySelector(".input");
let userArr = [];
const getData = async () => {
  heading.innerHTML = "USER DETAILS👇";
  const URL = await fetch(`https://freetestapi.com/api/v1/users`);
  const data = await URL.json();
  userArr = data;
  // console.log(userArr);
  userDetails(data);
};
function userDetails(details) {
  h.innerHTML = "";
  details.forEach((users) => {
    const div = document.createElement("div");
    div.classList.add("user");

    div.innerHTML = `
    <h3><span>NAME : </span> ${users.name}</h3>
                <p><span> AGE :</span> ${users.age}</p>
                <p> <span>EMAIL : </span> ${users.email}</p>
                <p><span>HOBBIES : </span> ${users.hobbies}</p>
                <p><span>OCCUPATION :</span>  ${users.occupation}</p>
                <p><span>PHONE :</span>  ${users.phone}</p>
                <p><span>USERNAME :</span>  ${users.username}</p>
                <p><span>WEBSITE :</span>  ${users.website}</p>
                
                `;
    h.appendChild(div);
  });
}
getData();

input.addEventListener("input", (e) => {
  const val = e.target.value;
  searchInput(val);
});
function searchInput(value) {
  // console.log(value);
  const filterData = userArr.filter(
    (cur) =>
      cur?.username?.toLowerCase().includes(value.toLowerCase()) ||
      cur?.email?.toLowerCase().includes(value.toLowerCase()) ||
      cur?.name?.toLowerCase().includes(value.toLowerCase()) ||
      cur?.occupation?.toLowerCase().includes(value.toLowerCase())
  );

  heading.innerHTML = "USER DETAILS👇";
  if (filterData.length > 0) {
    userDetails(filterData);
  } else {
    h.innerHTML = "";
    heading.innerHTML = "USER NOT FOUND";
  }
}
