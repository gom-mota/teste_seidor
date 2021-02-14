import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import SimpleModal from '../../Modal';
import RegisterForm from '../Form';

import { Container } from './styles';

const EmployeeTable = () => {

    const employees = useSelector(state => state.employeeReducer.data);
    const modalState = useSelector(state => state.modalReducer);

    const dispatch = useDispatch();

    // Get index of item in selected line
    const [currentIndex, setCurrentIndex] = useState(null);

    function deleteEmployee(index){
        dispatch({ type: 'DELETE_EMPLOYEE', index });
    }

    return (
        <>
            <table>
                <tr>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Salário</th>
                    <th>Desconto</th>
                    <th>Dependentes</th>
                    <th>Ação</th>
                </tr>
                {
                    employees.map((employee,index)=>(
                        <tr>
                            <td>{employee.name}</td>
                            <td>{employee.cpf}</td>
                            <td>{employee.salary}</td>
                            <td>{employee.discount}</td>
                            <td>{employee.dependents}</td>
                            <td>
                                <button type="button" onClick={()=>deleteEmployee(index)}>
                                    Excluir
                                </button>
                                <button type="button" onClick={()=> {dispatch({type: 'TOGGLE_MODAL_UPDATE_EMPLOYEE'});setCurrentIndex(index)}}>
                                    Editar
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </table>

            {
                /* Checks if the modal of updateEmployee is visible */
                modalState.updateEmployeeIsVisible?
                    <SimpleModal onClose={()=> dispatch({type: 'TOGGLE_MODAL_UPDATE_EMPLOYEE'})}>
                        <RegisterForm action="updateEmployee" index={currentIndex} />
                    </SimpleModal>
                :null
            }
        </>
    )
}

export default EmployeeTable;