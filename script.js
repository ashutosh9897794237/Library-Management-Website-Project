let btnAdd = document.querySelector('button');
let table = document.querySelector('table');
let nameInput = document.querySelector('#name');
let issue = document.querySelector('#issue');
let professionInput = document.querySelector('#profession');
btnAdd.addEventListener('click', () => {
    let name = nameInput.value;
    let issue = issueInput.value;
    let profession = professionInput.value;
    let template = `
                <tr>
                    <td>${name}</td>
                    <td>${profession}</td>
                    <td>${issue}</td>
                    <td><button class="deleteBtn">Delete</button></td>
                </tr>`;
    table.innerHTML += template;
});