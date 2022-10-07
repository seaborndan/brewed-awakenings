import { getEmployees, getOrders, getProducts } from "./database.js"
import { findEmployee, findProduct } from "./Orders.js"
const products = getProducts()
const employees = getEmployees()
const orders = getOrders()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target;

        if(itemClicked.id.startsWith("employee")) {
            const[,employeePrimaryKey] = itemClicked.id.split("--");
            let matchingEmployee = employees.find(({id}) => id === parseInt(employeePrimaryKey));
            let orderNum = 0;
            for(const order of orders) {
                
                if(order.employeeId === matchingEmployee.id) {
                    orderNum ++;
                }
            }
            window.alert(`${matchingEmployee.name} has sold ${orderNum} products`);
        }
    }
)

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

