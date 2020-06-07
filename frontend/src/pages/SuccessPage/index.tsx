import React from 'react';
import './styles-success.css';
import {useHistory, Link} from 'react-router-dom';

import correct from '../../assets/correct.webp';

const SuccessPage = () => {
    const history = useHistory();
    
    return (
        <body id="sla">
        <div className="content">
            <img src={correct} alt="Cadastro Concluído" className="imagem" />
            <h2>Cadastro Concluído!</h2>
            <Link to="/" className="backToHome">Voltar para home</ Link>
        </div>
        </body>
        
    )
} 

export default SuccessPage;
