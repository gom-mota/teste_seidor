import React, { useState } from "react";

import { useDispatch, useSelector } from 'react-redux';
import { ButtonPrimary } from '../../Button';
import { FaCheck } from 'react-icons/fa';

import { ContainerButton, TextInput } from './styles';

const EmployeeForm = (props) => {

    const employees = useSelector(state => state.employeeReducer.data);    
    const dispatch = useDispatch();

    function verifyInput(){
        let mode = false;
        if(inputs.name!="" && inputs.cpf!="" && inputs.salary!="" && inputs.discount!="" && inputs.dependents!="" || inputs.dependents=="0"){
            mode = true;
        }
        else{
            mode = false;
        }
        return mode;
    }

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
        {props.action=="addEmployee"?<h1>Cadastrar Funcionário</h1>:<h1>Atualizar Dados</h1>}
        
            <form>
                <div>
                    <label>Nome</label>
                    <TextInput
                        type="text"
                        value={inputs.name}
                        name="name"
                        onChange={e => updateFormValue(e)}
                        required
                    />
                </div>
                <div>
                    <label>CPF</label>
                    <TextInput
                        placeholder="000.000.000-00"
                        type="text"
                        value={inputs.cpf}
                        name="cpf"
                        onChange={e => updateFormValue(e)}
                        required
                    />
                </div>
                <div>
                    <label>Salário</label>
                    <TextInput
                        type="text"
                        value={inputs.salary}
                        name="salary"
                        onChange={e => updateFormValue(e)}
                        required
                    />
                </div>
                <div>
                    <label>Desconto</label>
                    <TextInput
                        type="text"
                        value={inputs.discount}
                        name="discount"
                        onChange={e => updateFormValue(e)}
                        required
                    />
                </div>
                <div>
                    <label>Dependentes</label>
                    <TextInput
                        type="text"
                        value={inputs.dependents}
                        name="dependents"
                        onChange={e => updateFormValue(e)}
                    />
                </div>
            </form>
            <ContainerButton>
            {props.action=='updateEmployee'?
                <ButtonPrimary onClick={updateEmployee} disabled={verifyInput()==true?false:true}>
                    <FaCheck /> Atualizar
                </ButtonPrimary>
                :
                <ButtonPrimary onClick={addEmployee} disabled={verifyInput()==true?false:true}>
                    <FaCheck /> Cadastrar
                </ButtonPrimary>
            }
            <div>
                {verifyInput()==false?<p>Preencha todos os dados</p>:""}
            </div>
            
            </ContainerButton>
        </>
    )
}

export default EmployeeForm;