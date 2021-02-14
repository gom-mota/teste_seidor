import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

// Initial list for Employees
const initialEmployeeState = {
    data: [
        {
            name: "Letícia Aurora Farias",
            cpf: "936.938.039-60",
            salary: 998,
            discount: 74.85,
            dependents: 2
          },
          {
            name: "Edson Thiago Drumond",
            cpf: "748.517.476-24",
            salary: 1045,
            discount: 78.38,
            dependents: 1
          },
          {
            name: "Fátima Elza Tereza Castro",
            cpf: "701.118.872-08",
            salary: 5500,
            discount: 628.95,
            dependents: 0
          },
          {
            name: "Sandra Giovanna Drumond",
            cpf: "715.890.756-25",
            salary: 4522,
            discount: 492.03,
            dependents: 3
          },
          {
            name: "Valentina Clara Nunes",
            cpf: "101.151.404-41",
            salary: 10000,
            discount: 713.1,
            dependents: 4
          }
    ],
}

function modalReducer(state = [], action){
    switch (action.type){
        case 'TOGGLE_MODAL_ADD_EMPLOYEE':
            return{
                ...state,
                addEmployeeIsVisible: !state.addEmployeeIsVisible
            }
        case 'TOGGLE_MODAL_UPDATE_EMPLOYEE':
            return{
                ...state,
                updateEmployeeIsVisible: !state.updateEmployeeIsVisible
            }
        default:
            return state;
    }
}

function employeeReducer (state = initialEmployeeState, action) {
    switch (action.type){
        case 'ADD_EMPLOYEE':
            return {
                ...state, 
                data: [ ...state.data, { ...action.employee }]
            }
        case 'DELETE_EMPLOYEE':
            return {
                ...state,
                data: state.data.filter(
                    (employee, index) => index !== action.index
                )
            }
        case 'UPDATE_EMPLOYEE':
            return {
                ...state,
                data: state.data.map((employee, index) =>
                    index === action.index ? { ...action.employee } : employee
                )
            }
        default:
            return state;
    }   
}

// Use local storage
const persistConfig = {
    key: 'employees',
    storage,
    whitelist: ['employeeReducer']
}

const rootReducer = combineReducers({
    employeeReducer,
    modalReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };