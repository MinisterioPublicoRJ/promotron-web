import React, { useState, useEffect } from 'react';

import './styles.css';
import Api from '../../api';
import { Table, Spinner, SectionTitle } from '../../components';
import { getUser } from '../../user';

const ProcessList = () => {
  // eslint-disable-next-line no-shadow
  const [processListData, setProcessListData] = useState([]);
  const [loading, setLoading] = useState(true);

  // de-> para dos campos pros nomes das colunas
  const tableColumns = {
    MPRJ: 'docu_nr_mp',
    'Nº Externo': 'docu_nr_externo',
    'Último Andamento': 'dt_ultimo_andamento',
    Classe: 'classe_documento',
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const response = await Api.getProcessList(getUser());
        setProcessListData(response);
      } catch (e) {
        setLoading(true);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) {
    return <Spinner size="large" />;
  }

  return (
    <div className="processList-outer">
      <SectionTitle value="Últimos processos movimentados" />
      {!processListData ? (
        <p> Nenhum processo para exibir ...</p>
      ) : (
        <div className="processList-tableWrapper">
          <Table data={processListData} columns={tableColumns} showHeader />
        </div>
      )}
    </div>
  );
};

export default ProcessList;
