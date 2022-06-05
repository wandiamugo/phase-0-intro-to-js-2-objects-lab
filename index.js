// Write your solution in this file!
const employee= {
    name:"Wilfred",
};

function updateEmployeeWithKeyAndValue(employee ,key ,value){
    const newEmployee = {...employee}
    newEmployee[key]= value;
    return newEmployee;
}

const employees = updateEmployeeWithKeyAndValue(
    employee,
    "StreetAddress",
    "11 Broadway"
);

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key ,value){
    employee [key] = value;
    return employee;
}

const newEmployee = destructivelyUpdateObject(employee, "StreetAddress" ,"Broadway")

function deleteFromEmployeeByKey(employee,key ,value){
    const newEmployee ={...employee};
    newEmployee[key]=value;
    delete newEmployee["name"];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey (employee, key, value){
    employee[key]=value;
    delete employee["name"];
    return employee;
}