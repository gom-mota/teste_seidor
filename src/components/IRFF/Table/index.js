import React from 'react';

import { useSelector } from 'react-redux';
import Table from '../../Table';

import { Container } from './styles';

const IRFFTable = () => {

    const employees = useSelector(state => state.employeeReducer.data);

    function calculateIRBaseSalary(salary, discount, dependents){
        
        salary = parseFloat(salary);
        discount = parseFloat(discount);
        dependents = parseInt(dependents);

        const result = (salary-discount)-(164.56*dependents);
        return result;
    }

    function calculateDiscountIRPF(salary, discount, dependents) {
        
        const IRBaseSalary = calculateIRBaseSalary(salary, discount, dependents);
        let result=0;

        if(IRBaseSalary<=1.903,98) {
            result = 0;
        }
        if(IRBaseSalary >= 1.903,99 && IRBaseSalary<=2.826,65) {
            result = (IRBaseSalary * 0.075) - 142.80;
        }
        if(IRBaseSalary >= 2.826,66 && IRBaseSalary<=3.751,5) {
            result = (IRBaseSalary * 0.15) - 354.80;
        }
        if(IRBaseSalary >= 3.751,6 && IRBaseSalary<=4.664,68) {
            result = (IRBaseSalary * 0.225) - 636.13;
        }
        if(IRBaseSalary > 4.664,68) {
            result = (IRBaseSalary * 0.275) - 869.36;
        }
        return (
            result<=0?"0":result
        )
    }

    return (
        <Container>
            <Table>
                <tr>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Salário</th>
                    <th>Desconto</th>
                    <th>Dependentes</th>
                    <th>Desconto IRPF</th>
                </tr>
                {
                    employees.map((employee,index)=>(
                        <tr>
                            <td>{employee.name}</td>
                            <td>{employee.cpf}</td>
                            <td>{employee.salary}</td>
                            <td>{employee.discount}</td>
                            <td>{employee.dependents}</td>
                            <td>{calculateDiscountIRPF(
                                employee.salary,
                                employee.discount,
                                employee.dependents
                            )}</td>
                        </tr>
                    ))
                }
            </Table>
        </Container>
    )
}

export default IRFFTable;