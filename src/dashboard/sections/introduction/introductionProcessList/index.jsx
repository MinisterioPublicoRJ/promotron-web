import React from 'react';

import '../styles.css';

function IntroductionProcessList() {
  return (
    <div className="introduction-wrapper">
      <div className="introduction-yourDesk">
        <h3>Lista de Processos</h3>
        <p>
          Espaço do painel que você encontra todo o movimento dos processos da sua Promotoria.
          Separados em Vistas Abertas, PIC, Inquéritos, AISP e sinalizamos também a quantidade de
          finalizados nos últimos 30 dias. Logo abaixo é possível ainda filtrar as vistas pela vida
          do processo na sua mesa. Por último a lista dos processos propriamente dita.
        </p>
      </div>
      <div className="btns-introduction">
        <button className="btn-leave">Sair</button>
        <button className="btn-introduction-preavious">Anterior</button>
        <button className="btn-introduction-next">Próximo</button>
      </div>
    </div>
  );
}
export default IntroductionProcessList;
