const nameInput = document.getElementById("name") as HTMLInputElement;
const doitButton = document.getElementById("doit") as HTMLInputElement;
const messageOutput = document.getElementById("message");

//nameInput.value = 'Tacos';
doitButton.addEventListener('click', function () {
    const enteredname = nameInput.value;
    messageOutput.innerHTML = enteredname.toUpperCase();
});