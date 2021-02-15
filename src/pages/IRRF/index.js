import React from 'react';

import TabBar from '../../components/TabBar';
import IRFFTable from '../../components/IRFF/Table';

import { Container, Content, Text } from './styles';

const IRFF = () =>{
    return(
        <Container>
            <TabBar />
            <Content>   
                <h1>Tabela e cálculos do IRRF</h1>
            <Text>
                    <p>
                        A tabela do IR é um dos principais instrumentos para auxiliar os contribuintes na hora de enviar as informações fiscais para a Receita. Afinal, é nesse documento que constam os alíquotas do Imposto de Renda.
                    </p>
                    <p>
                        Isso quer dizer que é essa a fonte para você saber qual é o percentual que deve ser aplicado sobre os seus rendimentos.
                        Portanto, na hora de fazer o cálculo e declarar seus rendimentos, ter essa tabela é fundamental para que você não envie nenhum dado errado e, consequentemente, não caia na malha fina.
                    </p>
                    
                </Text>   

                <IRFFTable />
                
            </Content>
        </Container>
        
    );
};

export default IRFF;