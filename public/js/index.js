const btnAdd = document.getElementById("add");
const txtItem = document.getElementById("item");

btnAdd.addEventListener("click", (e) => {
  return false;
});

const remove = (id) => {
  document.getElementById(id).submit();
};