import React, { useState } from "react";

import { useDispatch, useSelector } from 'react-redux';
import { ButtonPrimary } from '../../Button';
import { FaCheck } from 'react-icons/fa';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Form, TextInput } from './styles';

const EmployeeForm = (props) => {

    const employees = useSelector(state => state.employeeReducer.data);    
    const dispatch = useDispatch();   

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
    
    function resetInputsValue(){
        setInputs({
            name: "",
            cpf: "", 
            salary: "",
            discount: "",
            dependents: ""
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

    const updateFormValue = ({ target: { name, value } }) => {
        setInputs(inputObj => ({ ...inputObj, [name]: value }))
    }

    const schema = yup.object().shape({
        
        name: yup.string()
        .required("Nome é obrigatório")
        .matches(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u, "Nome inválido")
        .min(3, "O nome deve ter no mínimo 3 caracteres"),
        
        cpf: yup.string()
        .required("CPF é obrigatório")
        .matches(/(\d{3}).(\d{3}).(\d{3})-(\d{2})/, "CPF inválido"),
        
        salary: yup.string()
        .required("Salário obrigatório")
        .matches(/^[\d,.?!]+$/, "Salário inválido"),
        
        discount: yup.string()
        .required("Desconto obrigatório")
        .matches(/^[\d,.?!]+$/, "Desconto inválido"),
       
        dependents: yup.number()
        .required("Dependentes obrigatório")
        .typeError("Número inválido")
        
    })

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    })
    
    return (
        <>
        {props.action=="addEmployee"?<h1>Cadastrar Funcionário</h1>:<h1>Atualizar Dados</h1>}
        
            <Form onSubmit={handleSubmit(props.action=="addEmployee"?addEmployee:updateEmployee)}>
            <div>
                <label>Nome completo</label>
            </div>
                <div>
                    <TextInput
                        type="text"
                        value={inputs.name}
                        name="name"
                        onChange={e => updateFormValue(e)}
                        ref={register}
                        data-testid="form-field"
                    />
                      
                </div>
                <div><p>{errors.name?.message}</p></div>
                <div>
                    <div><label>CPF</label></div>
                    <div><label>Salário</label></div>
                </div>
                
                <div>
                    <TextInput
                        placeholder="000.000.000-00"
                        type="text"
                        value={inputs.cpf}
                        name="cpf"
                        onChange={e => updateFormValue(e)}
                        ref={register}
                    />
                    

                    <TextInput
                        type="text"
                        value={inputs.salary}
                        name="salary"
                        onChange={e => updateFormValue(e)}
                        ref={register}
                    />
                </div>
                <div>
                    <div><p >{errors.cpf?.message}</p></div>
                    <div><p >{errors.salary?.message}</p></div>
                </div>
                <div>
                    <div><label>Desconto</label></div>
                    <div><label>Dependentes</label></div>
                </div>
                
                <div>
                    <TextInput
                        type="text"
                        value={inputs.discount}
                        name="discount"
                        onChange={e => updateFormValue(e)}
                        ref={register}
                    />
                                        
                    <TextInput
                        type="text"
                        value={inputs.dependents}
                        name="dependents"
                        onChange={e => updateFormValue(e)}
                        ref={register}
                    />
                </div>
                <div>
                    
                    <div><p>{errors.discount?.message}</p></div>
                    <div><p>{errors.dependents?.message}</p></div>
                </div>  
                <br/>
                <div className="action">
                    {
                    props.action=='updateEmployee'?
                        <ButtonPrimary type="submit">
                            <FaCheck /> Atualizar
                        </ButtonPrimary>
                        :
                        <ButtonPrimary type="submit">
                            <FaCheck /> Cadastrar
                        </ButtonPrimary>
                    }
                </div>
            </Form>
            
        </>
    )
}

export default EmployeeForm;