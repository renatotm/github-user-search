import Button from 'core/components/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Home = () => (
    <div className="col-6 home-container">

        <h1 className="text-title">
            Desafio do Capítulo 3,<br /> Bootcamp DevSuperior
        </h1>
        <ul className="text-subtitle">
            <li >
                Bem-vindos a o desafio do capitulo 3 do Bootcamp DevSuperior.<br/><br/>
            </li>
            <li>
                Favor observar as instruções passadas no capitulo sobre a <br/> elaboração deste projeto.<br/><br/>
            </li>
            <li>
                Este design foi adaptado a partir de Ant Design System for Figma, de <br/>Mateusz Wierzbicki:
                        <a href="/"> antforfigma@gmail.com</a>
            </li>
        </ul>

        <Link to="/search">
            <Button text="Começar" />
        </Link>

    </div>
);

export default Home;