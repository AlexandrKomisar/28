const mainDiv = document.getElementById("content");

const tableDiv = document.createElement("div");
tableDiv.setAttribute("id", "content__tableDiv");
tableDiv.className = "content__tableDiv";

const tableTag = document.createElement("table");
tableTag.setAttribute("id", "content__table");
tableTag.className = "content__table";

tableDiv.append(tableTag);
mainDiv.append(tableDiv);

class Employee {
    constructor(name, position, department, salary) {
        this.name = name;
        this.position = position;
        this.department = department;
        this.salary = salary;
    }
}
const arrEmp = [
    new Employee("Anatoly Trubin", "Manager", "Sales", 5000),
    new Employee("Andriy Pyatov", "Manager", "Sales", 5000),
    new Employee("Georgy Buschan", "Manager", "Sales", 5000),
    new Employee("Alexander Karavaev", "Manager", "Sales", 5000),
    new Employee("Alexander Tymchik", "Manager", "Sales", 5000),
    new Employee("Vitaly Mikolenko", "Manager", "Sales", 5000),
    new Employee("Denis Popov", "DevOps Engineer", "DevOps", 3500),
    new Employee("Ilya Zabarny", ".Net Senior Developer", "Desktop Solutions",
        4000),
    new Employee("Mykola Matvienko", "Team Lead", "Desktop Solutions", 5000),
    new Employee(
        "Serhiy Krivtsov",
        ".Net Senior Developer",
        "Desktop Solutions",
        4000
    ),
    new Employee(
        "Edward Sobol ",
        ".Net Junior Developer",
        "Desktop Solutions",
        1000
    ),
    new Employee(
        "Oleksandr Zinchenko",
        ".Net Junior Developer",
        "Desktop Solutions",
        1000
    ),
    new Employee(
        "Alexander Zubkov",
        ".Net Junior Developer",
        "Desktop Solutions",
        1000
    ),
    new Employee(
        "Andriy Yarmolenko",
        ".Net Middle Developer",
        "Desktop Solutions",
        4000
    ),
    new Employee("Viktor Tsygankov", ".Net Senior Developer", "Desktop Solutions", 4000)
];
class EmpTable {
    constructor(arr) {
        this.arr = arr;
    }
    getHtml() {
        const table = document.getElementById("content__table");
        const array = this.arr;
        const head = document.createElement("tr");
        head.setAttribute("style", "font-size: 18px;");
        const th1 = document.createElement("th");
        th1.textContent = "Name";
        const th2 = document.createElement("th");
        th2.textContent = "Position";
        const th3 = document.createElement("th");
        th3.textContent = "Department";
        const th4 = document.createElement("th");
        th4.textContent = "Salary ($)";
        head.append(th1);
        head.append(th2);
        head.append(th3);
        head.append(th4);
        table.append(head);
        for (let i in array) {
            let tr = document.createElement("tr");
            table.append(tr);
            for (let j in array[i]) {
                let td = document.createElement("td");
                td.textContent = array[i][j];
                tr.append(td);
                td.setAttribute("style", "padding: 5px 10px; font-size: 18px;");
            }
        }
        table.setAttribute("border", "2");
        table.setAttribute("bordercolor", "brown");
        table.setAttribute("width", "60%");
        table.setAttribute("style", "margin: auto; background-color: lightgrey;");
    }
}
const tableObj = new EmpTable(arrEmp);
tableObj.getHtml();