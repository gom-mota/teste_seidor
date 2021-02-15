import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import SimpleModal from '../../Modal';
import RegisterForm from '../Form';
import Table from '../../Table';

import { Action, Container } from './styles';
import { FaEdit, FaTrash } from 'react-icons/fa';

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
        <Container>
            <Table>
                <tr>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Salário</th>
                    <th>Desconto</th>
                    <th>Dependentes</th>
                    <th></th>
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
                                    <Action>
                                        <a className="delete" onClick={()=>deleteEmployee(index)}>
                                            <FaTrash />
                                        </a>
                                        <a className="edit" onClick={()=> {dispatch({type: 'TOGGLE_MODAL_UPDATE_EMPLOYEE'});setCurrentIndex(index)}}>
                                            <FaEdit />
                                        </a>
                                    </Action>
                                </td>
                            </tr>
                    ))
                }
            </Table>

            {
                /* Checks if the modal of updateEmployee is visible */
                modalState.updateEmployeeIsVisible?
                    <SimpleModal onClose={()=> dispatch({type: 'TOGGLE_MODAL_UPDATE_EMPLOYEE'})}>
                        <RegisterForm action="updateEmployee" index={currentIndex} />
                    </SimpleModal>
                :null
            }
        </Container>
    )
}

export default EmployeeTable;