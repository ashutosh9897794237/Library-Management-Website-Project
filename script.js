let btnAdd = document.querySelector('button');
let table = document.querySelector('table');
let nameInput = document.querySelector('#name');
let issueInput = document.querySelector('#issue');
//let professionInput = document.querySelector('#profession');
//const d = new Date();
//let demoInput = document.querySelector("#demo");
//let now = new Date();
//console.log(now);

var d = new Date();
 document.write(d.toDateString());

 //var id = new EventCounts();



btnAdd.addEventListener('click', () => {
    //let id = IdInput.value;
    let name = nameInput.value;
   // let age = ageInput.value;
    //let profession = professionInput.value;
    let issue = issueInput.value;
    let template = `
                <tr>
                    <td>${name}</td>
                    <td>${issue}</td>
                    <td>${d}</td>
                    <td><button class="deleteBtn">return</button>/<button class="deleteBtn">Not return</button></td>
                </tr>`;
    table.innerHTML += template;
});