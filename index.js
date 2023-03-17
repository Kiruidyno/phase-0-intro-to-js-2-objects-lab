// Write your solution in this file!
const employee={
    name: "Sam",
    streetAddress:"", 
}
console.log(employee);


function updateEmployeeWithKeyAndValue(employee, key, value){
  const updateEmployee={...employee};
  updateEmployee[key]=value;
  return updateEmployee;
  }

  const newEmployee=updateEmployeeWithKeyAndValue(
    streetAddress, "11 Broadway"
  );


function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value;
    return employee;
  };
  
  const updatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Sam");
  updatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(updatedEmployee, "streetAddress", "12 Broadway");
  
  console.log(updatedEmployee);



function deleteFromEmployeeByKey (employee, key){
    const newEmployee={...employee};
    delete newEmployee.name;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name;
    return employee;
}
