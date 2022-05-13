const contacts = document.getElementsByClassName("contacts")[0];
const stickyHeader = document.getElementsByClassName("stickyHeader")[0];

function addContacts() {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 50000; i++) {
    const child = document.createElement("div");
    child.textContent = i;
    child.classList.add("contact");
    fragment.appendChild(child);
  }
  contacts.appendChild(fragment);
}

contacts.addEventListener("scroll", (e) => { 
  const items = contacts.getElementsByClassName("contact");
    let index = Math.floor(contacts.scrollTop / 18);//или items[0].offsetTop вместо 18
    console.log(index);
    if (index == 0)
    {
      stickyHeader.textContent =  items[index].textContent;
    }
    else {
      stickyHeader.textContent  =  items[index - 1].textContent;//можно было просто сразу записать index, но не стала привязываться к конкретному случаю
    }    
});

addContacts();