const inputWindow = document.getElementById("input");
const key1 = document.getElementById("key-1");
const key2 = document.getElementById("key-2");
const key3 = document.getElementById("key-3");
const key4 = document.getElementById("key-4");
const key5 = document.getElementById("key-5");
const key6 = document.getElementById("key-6");
const key7 = document.getElementById("key-7");
const key8 = document.getElementById("key-8");
const key9 = document.getElementById("key-9");
const key0 = document.getElementById("key-0");
const keyad = document.getElementById("key-+");
const keysub = document.getElementById("key-");
const keymult = document.getElementById("key-*");
const keydiv = document.getElementById("key-/");
// const keymod = document.getElementById("key-%");
const keyac = document.getElementById("key-ac");
const keydel = document.getElementById("key-del");
const equal1 = document.getElementById("equal-s");

key0.addEventListener("click", () => {
  inputWindow.value = inputWindow.value + 0;
});
key1.addEventListener("click", () => {
  inputWindow.value = inputWindow.value + 1;
});
key2.addEventListener("click", () => {
  inputWindow.value = inputWindow.value + 2;
});
key3.addEventListener("click", () => {
  inputWindow.value = inputWindow.value + 3;
});
key4.addEventListener("click", () => {
  inputWindow.value = inputWindow.value + 4;
});
key5.addEventListener("click", () => {
  inputWindow.value = inputWindow.value + 5;
});
key6.addEventListener("click", () => {
  inputWindow.value = inputWindow.value + 6;
});
key7.addEventListener("click", () => {
  inputWindow.value = inputWindow.value + 7;
});
key8.addEventListener("click", () => {
  inputWindow.value = inputWindow.value + 8;
});
key9.addEventListener("click", () => {
  inputWindow.value = inputWindow.value + 9;
});
keysub.addEventListener("click", () => {
  inputWindow.value = inputWindow.value + "-";
});
keymult.addEventListener("click", () => {
  inputWindow.value = inputWindow.value + "*";
});
keydiv.addEventListener("click", () => {
  inputWindow.value = inputWindow.value + "/";
});
// keymod.addEventListener("click", () => {
//   inputWindow.value = inputWindow.value + "%";
// });
keyac.addEventListener("click", () => {
  inputWindow.value = "";
});
keydel.addEventListener("click", () => {
  let data = inputWindow.value;
  data = data.substring(0, data.length - 1);
  inputWindow.value = data;
});
// key.addEventListener("click", () => {
//   inputWindow.value = inputWindow.value + ;
// });
keyad.addEventListener("click", () => {
  inputWindow.value = inputWindow.value + "+";
});
equal1.addEventListener("click", () => {
  let val = inputWindow.value;
  try {
    let ans = eval(val)
    //  func(val);
    console.log(ans + "ans");
    inputWindow.value = "Ans: " + ans;

  } catch (error) {
    console.log(error)
    if (val == "1/0") {
      inputWindow.value = "Infinity";
    }
    else {
      inputWindow.value = "SYNTAX ERROR";

    }

  }
});

