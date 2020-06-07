import React from 'react';

//React.FC é um generic. Signica que é um componente em formato de função. Permite passar propriedades

//interface diz quais propriedades o componente irá receber
//"title?" significa não obrigatório. "title" significa obrigatório
//props significa "ei, eu estou usando propriedades"

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    );
}

export default Header;