import React from "react";
import { useSelector, useDispatch } from 'react-redux';

import EmployeeTable from '../../components/Employee/Table';
import EmployeeForm from '../../components/Employee/Form';
import { ButtonPrimary } from '../../components/Button';
import SimpleModal from '../../components/Modal';

import { Container } from './styles';

const Employee = () =>{

    const modalState = useSelector(state => state.modalReducer);
    const dispatch = useDispatch();

    return(

        <Container>            
            <h1>Funcionários</h1>

            {/* Show addEmployee modal */}
            <ButtonPrimary onClick={()=> dispatch({type: 'TOGGLE_MODAL_ADD_EMPLOYEE'})}>
                Adicionar Funcionário
            </ButtonPrimary>

            {
                /* Checks if the modal of addEmployee is visible */
                modalState.addEmployeeIsVisible? 
                    <SimpleModal onClose={()=> dispatch({type: 'TOGGLE_MODAL_ADD_EMPLOYEE'})}>
                        <EmployeeForm action="addEmployee"/>
                    </SimpleModal>
                :null
            }

            <EmployeeTable />

        </Container>
        
    )
}

export default Employee;