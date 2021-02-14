import React, { useState } from "react";

import { useDispatch, useSelector } from 'react-redux';
import { ButtonPrimary } from '../../Button';

import { Container } from './styles';

const EmployeeForm = (props) => {

    const employees = useSelector(state => state.employeeReducer.data);    
    const dispatch = useDispatch();

    function resetInputsValue(){
        setInputs({
            name: "",
            cpf: "", 
            salary: "",
            discount: "",
            dependents: ""
        })
    }

    function updateEmployee() {
        dispatch({ 
            type: 'UPDATE_EMPLOYEE',
            employee: {...inputs},
            index: props.index
        })

        // Hide modal when updateEmployee
        dispatch({
            type: 'TOGGLE_MODAL_UPDATE_EMPLOYEE'
        })
    }

    function addEmployee() {
        dispatch({ 
            type: 'ADD_EMPLOYEE',
            employee: {...inputs}
        })
        resetInputsValue();

        // Hide modal when addEmployee
        dispatch({
            type: 'TOGGLE_MODAL_ADD_EMPLOYEE'
        })
    }

    const [inputs, setInputs] = useState(
        props.action=="updateEmployee"?
        {
            // Fill inputs with values of the selected employee
            name: employees[props.index].name,
            cpf: employees[props.index].cpf, 
            salary: employees[props.index].salary,
            discount: employees[props.index].discount,
            dependents: employees[props.index].dependents
        }
        :{
            name: "",
            cpf: "", 
            salary: "",
            discount: "",
            dependents: ""
        }
    );

    const updateFormValue = ({ target: { name, value } }) => {
        setInputs(inputObj => ({ ...inputObj, [name]: value }))
    }
    
    return (
        <>
            <form>
                <div>
                    <label>Nome</label>
                    <input
                        type="text"
                        value={inputs.name}
                        name="name"
                        onChange={e => updateFormValue(e)}
                    />
                </div>
                <div>
                    <label>CPF</label>
                    <input
                        type="text"
                        value={inputs.cpf}
                        name="cpf"
                        onChange={e => updateFormValue(e)}
                    />
                </div>
                <div>
                    <label>Salário</label>
                    <input
                        type="text"
                        value={inputs.salary}
                        name="salary"
                        onChange={e => updateFormValue(e)}
                    />
                </div>
                <div>
                    <label>Desconto</label>
                    <input
                        type="text"
                        value={inputs.discount}
                        name="discount"
                        onChange={e => updateFormValue(e)}
                    />
                </div>
                <div>
                    <label>Dependentes</label>
                    <input
                        type="text"
                        value={inputs.dependents}
                        name="dependents"
                        onChange={e => updateFormValue(e)}
                    />
                </div>
            </form>
            {props.action=='updateEmployee'?
                <ButtonPrimary onClick={updateEmployee}>
                    Atualizar
                </ButtonPrimary>
                :
                <ButtonPrimary onClick={addEmployee}>
                    Cadastrar
                </ButtonPrimary>
            }
        </>
    )
}

export default EmployeeForm;