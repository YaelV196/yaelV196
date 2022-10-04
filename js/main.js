const GITHUB_URL = "https://github.com/YaelV196";


fetch(GITHUB_URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const profileImage = document.getElementById("profile-image");
    const profileName = document.getElementById("profile-name");
    
    profileImage.src = data.avatar_url;
    profileName.textContent = data.login;
    console.log("data", data)
    
  });


// animation
const card = document.querySelector(".card");
card.addEventListener('click', () => {
  card.classList.add('ani');
  setTimeout(() => {
    card.classList.remove('ani');
  }, 1000);
})


const codingLanguages = ["HTML", "CSS", "JavaScript"]

let word = 'This page was built using:';

for (let i = 0; i < codingLanguages.length - 1; i++) {
  if (i === codingLanguages.length - 2) {
    word += codingLanguages[i] + ' ';

  } else {
    word += codingLanguages[i] + ', ';

  }

}
word += ' and ' + codingLanguages[codingLanguages.length - 1];

document.querySelector('.p').textContent = word;




