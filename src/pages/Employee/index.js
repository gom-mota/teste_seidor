import React from "react";
import { useSelector, useDispatch } from 'react-redux';

import EmployeeTable from '../../components/Employee/Table';
import EmployeeForm from '../../components/Employee/Form';
import { ButtonPrimary } from '../../components/Button';
import SimpleModal from '../../components/Modal';
import TabBar from '../../components/TabBar';
import { FaPlus } from 'react-icons/fa'

import { Container, Content } from './styles';

const Employee = () =>{

    const modalState = useSelector(state => state.modalReducer);
    const dispatch = useDispatch();

    return(

        <Container>
            <TabBar />
            
            <Content>
            <h1>Funcionários</h1>

            <div className="containerButton">
                {/* Show addEmployee modal */}
                <ButtonPrimary onClick={()=> dispatch({type: 'TOGGLE_MODAL_ADD_EMPLOYEE'})}>
                    <FaPlus /> Adicionar
                </ButtonPrimary>
            </div>

            {
                /* Checks if the modal of addEmployee is visible */
                modalState.addEmployeeIsVisible? 
                    <SimpleModal onClose={()=> dispatch({type: 'TOGGLE_MODAL_ADD_EMPLOYEE'})}>
                        <EmployeeForm action="addEmployee"/>
                    </SimpleModal>
                :null
            }

            <EmployeeTable />
            </Content>

        </Container>
        
    )
}

export default Employee;