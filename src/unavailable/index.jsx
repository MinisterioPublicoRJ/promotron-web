import React from 'react';
import './styles.css';
import unavaibleBanner from '../assets/imgs/unavailable-banner.png';
import promotronReparador from '../assets/imgs/promotron-repador@4x.png';
import diagnosticoImg from '../assets/imgs/Image-4.png';
import dominioImg from '../assets/imgs/Image1.png';
import painelDeComprasImg from '../assets/imgs/Image3.png';
import painelSaneamentoBasicoImg from '../assets/imgs/Image-2.png';

const Unavailable = () => {
  return (
    <div className="unavailable-wrapper">
      <div className="unavailable-content">
        <section className="unavailable-title">
          <div>
            <img
              height="100%"
              width="100%"
              className="unavaible-promotron-img"
              src={promotronReparador}
              alt="Robô Promotron Reparador."
            />
          </div>
          <div className="unavailable-intro">
            <h1>Oops!</h1>
            <h2>Estamos passando por problemas técnicos</h2>
            <p>
              <b>Nosso sistema está fora do ar. </b>
              A Gerência de Análises, Diagnósticos e Geoprocessamento da Diretoria de Gestão do Conhecimento (equipe gestora do MP em Mapas) INFORMA que, em virtude de um problema no hardware que dá suporte à operação do Parquet Digital, a plataforma se encontra indisponível.
              Informa, ainda, que as providências necessárias para a solução do problema já foram tomadas.
            </p>
          </div>
        </section>
        <section>
          <h3>Sugestões de ferramentas:</h3>
          <small>
            Seleção de ferramentas que podem ajudar na sua atuação enquanto o Parquet Digital está
            fora:
          </small>
          <div className="unavailable-options">
            <div>
              <img src={diagnosticoImg} alt="Diagnóstico das Promotorias de Justiça" />
	      <a href="http://j.mp/DiagnosticoPromotoriasMPRJ" target="blank">
              <h4>Diagnóstico das Promotorias de Justiça</h4>
	      </a>
              <small>Comparativo de feitos entre as Promotorias.</small>
            </div>
            <div>
              <img src={dominioImg} alt="Domínio" />
	      <a href="http://apps.mprj.mp.br/sistema/dominio/" target="blank">
              <h4>Domínio</h4>
	      </a>
              <small>Listagem de procedimentos, sua mesa e alguns alertas.</small>
            </div>
            <div>
              <img src={painelDeComprasImg} alt="Painel de Compras" />
	      <a href="http://j.mp/ComprasCovidMPRJ" target="blank">
              <h4>Painel de Compras</h4>
	      </a>
              <small>Compras públicas para enfrentamento da Covid-19.</small>
            </div>
            <div>
              <img src={painelSaneamentoBasicoImg} alt="Painel Saneamento Básico" />
	      <a href="http://j.mp/SaneamentoBasicoMPRJ" target="blank">
              <h4>Painel Saneamento Básico</h4>
	      </a>
              <small>Diagnóstico e indicadores de água esgoto e drenagem por município.</small>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Unavailable;
