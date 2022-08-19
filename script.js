let btnGet = document.querySelector('button');
let myTable = document.querySelector('#table');
var arr = [{
        id: 1,
        name: "John",
        dept: "IT",
        desg: "Team Lead"
    },
    {
        id: 2,
        name: "Ria",
        dept: "HR",
        desg: "Manager"
    },
    {
        id: 3,
        name: "Foo",
        dept: "IT",
        desg: "Technical Lead"
    },
    {
        id: 4,
        name: "Rob",
        dept: "HR",
        desg: "Trainee"
    },
    {
        id: 5,
        name: "Bob",
        dept: "Engineering",
        desg: "Engineer"
    }
];
let headers = ['Id', 'Name', 'Dept', 'Desg'];
btnGet.addEventListener('click', () => {
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');
    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);
    arr.forEach(emp => {
        let row = document.createElement('tr');
        Object.values(emp).forEach(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        })
        table.appendChild(row);
    });
    myTable.appendChild(table);
});