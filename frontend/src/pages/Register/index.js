import React, {useState} from 'react';
import logoImg from '../../assets/img/logo.svg';
import './style.css';
import api from '../../services/api';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowDownLeft} from 'react-icons/fi';

export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUF] = useState('');
    const history = useHistory();
    async function handleRegister(e){
        e.preventDefault();

        const data = {
            name, email, whatsapp, city, uf
        };
         try{
            const response  = await api.post('ongs', data);
            history.push('/')
         }catch(err){
            alert(`Erro no cadastro`);
         }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt=""/> 
                    <h1>Cadastro</h1>
                     <p>
                     Faça seu cadastro, entre na plataforma e ajude a encontrar os casos da sua ONG
                     </p>
                         <Link className="back-link" to ="/">
                            <FiArrowDownLeft  size={16} color="#e02041"/>
                            Mão tenho cadastro
                         </Link>
                </section>
                <form action="" onSubmit={handleRegister}>
                    <input type="text" name="" id="" 
                            placeholder="nome da ONG"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            />
                    <input type="email" name="" id="" 
                    
                    placeholder="e-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <input type="" placeholder="Whatsapp"
                            value={whatsapp}
                            onChange={e => setWhatsapp(e.target.value)}
                    />

                        <div className="input-group">
                            <input type="text" placeholder="Cidade" 
                                value={city}
                                onChange={e => setCity(e.target.value)}
                                />
                            <input type="text" 
                                    placeholder="UF"
                                     style={ { width:80 }} 
                                     value={uf}
                                     onChange={e => setUF(e.target.value)}
                                     />
                        </div>      

                        <button className="button" type="submit"> Cadastrar</button>

                </form>
            </div>
        </div>     
    );
}