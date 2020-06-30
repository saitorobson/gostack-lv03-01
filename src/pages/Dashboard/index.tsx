import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logo from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/62484200?s=460&u=6e4bb637010ba9caedbaab4fed7156f8be1c33da&v=4"
            alt="Robson Saito"
          />
          <div>
            <strong>saitorobson/ecoleta</strong>
            <p>Project created on NLW #1 from Rocketseat.</p>
          </div>

          <FiChevronRight />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/62484200?s=460&u=6e4bb637010ba9caedbaab4fed7156f8be1c33da&v=4"
            alt="Robson Saito"
          />
          <div>
            <strong>saitorobson/ecoleta</strong>
            <p>Project created on NLW #1 from Rocketseat.</p>
          </div>

          <FiChevronRight />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/62484200?s=460&u=6e4bb637010ba9caedbaab4fed7156f8be1c33da&v=4"
            alt="Robson Saito"
          />
          <div>
            <strong>saitorobson/ecoleta</strong>
            <p>Project created on NLW #1 from Rocketseat.</p>
          </div>

          <FiChevronRight />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
