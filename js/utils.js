const Toast = Swal.mixin({
  toast: true,
  position: "center",
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

const validCharacters = (event) => {
  const lastChar = event.data;
  if (lastChar === null) return;
  const check = lastChar.match(/[a-z\s]/g);
  if (check === null && isNaN(lastChar))
    event.target.value = event.target.value.replace(
      new RegExp("\\" + lastChar + "", "g"),
      ""
    );
  if (check === null && !isNaN(lastChar))
    event.target.value = event.target.value.replace(
      new RegExp(lastChar, "g"),
      ""
    );
};
