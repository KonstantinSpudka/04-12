"user strict";

const users = [
  {
    firstName: "Test1",
    lastName: "Testovich1",
    age: 28,
    photoSrc:
      "https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg",
  },
  {
    firstName: "Test2",
    lastName: "Testovich2",
    age: 31,
    photoSrc:
      "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    firstName: "Test3",
    lastName: "Testovich3",
    age: 70,
    photoSrc:
      "https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    firstName: "Test4",
    lastName: "Testovich4",
    age: 20,
    photoSrc:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    firstName: "Test5",
    lastName: "Testovich5",
    age: 28,
    photoSrc:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const usersListEl = document.querySelector(".usersList");

// users.forEach((u) => {
//   const usersListItemEl = createUsersListItem(u);
//   usersListEl.append(usersListItemEl);
// });

// append - наступний чайлд
const usersListItems = users.map((u) => createUsersListItem(u));
usersListEl.append(...usersListItems);

function createUsersListItem({ photoSrc, age, firstName, lastName }) {
  const usersListItemEl = document.createElement("li"); // додали єлемент
  usersListItemEl.classList.add("usersListItem"); // навісили клас

  usersListItemEl.append(
    createUserPhoto(photoSrc, `${firstName} ${lastName}`),
    createUserName(`${firstName} ${lastName}`),
    createUserAge(age),
    createRemoveBtn()
  );
  return usersListItemEl;
}

function createUserPhoto(src, alt) {
  const userPhotoEl = document.createElement("img"); // додали єлемент
  userPhotoEl.classList.add("userProfilePhoto"); // навісили клас
  userPhotoEl.src = src;
  userPhotoEl.alt = alt;
  return userPhotoEl;
}

function createUserName(content) {
  const userNameEl = document.createElement("p"); // додали єлемент
  userNameEl.classList.add("userName"); // навісили клас
  userNameEl.textContent = content; // додаємо контет
  return userNameEl;
}

function createUserAge(age) {
  const userAge = document.createElement("div"); // додали єлемент
  userAge.textContent = age; // додаємо контет
  return userAge;
}
function createRemoveBtn() {
  const removeUserBtn = document.createElement("button"); // додали єлемент
  removeUserBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  removeUserBtn.onclick = (e) => {
    e.target.closest(".usersListItem").remove();
  };
  return removeUserBtn;
}
