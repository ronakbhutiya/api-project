var h = document.querySelector(".users");
const heading = document.querySelector("h2");
const input = document.querySelector(".input");
const userArr = [];
const getData = async () => {
  heading.innerHTML = "USER DETAILS👇";
  const URL = await fetch(`https://freetestapi.com/api/v1/users`);
  const data = await URL.json();

  data.forEach((users) => {
    const div = document.createElement("div");
    div.classList.add("user");
    userArr.push(div);

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
};
getData();

input.addEventListener("input", (e) => {
  const val = e.target.value;
  console.log(val);
});
