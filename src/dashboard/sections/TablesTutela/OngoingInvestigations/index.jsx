import React, { useState, useEffect } from 'react';

import Api from '../../../../api';
import { CustomTable, Spinner, SectionTitle } from '../../../../components';
import { useAuth } from '../../../../app/authContext';

const OngoingInvestigations = () => {
  const { buildRequestParams } = useAuth();
  // eslint-disable-next-line no-shadow
  const [processListData, setProcessListData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // de-> para dos campos pros nomes das colunas
  const tableColumns = {
    'Nº do Processo': 'docuNrExterno',
    Personagens: 'docuPersonagens',
    Classe: 'classeDocumento',
    'Data Andamento': 'dtUltimoAndamento',
    'Rótulo Andamento': 'ultimoAndamento',
  };
  
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const response = await Api.getProcessList(buildRequestParams());
        setProcessListData(response);
      } catch (e) {
        setLoading(true);
      } finally {
        setLoading(false);
      }
    };
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Spinner size="medium" />;
  }
  return (
    <div className="ongoingInvestigations-outer" >
      {!processListData.length ? (
        <p className="paragraphWrapper"> Nenhum processo para exibir</p>
      ) : (
        <div className="ongoingInvestigations-tableWrapper">
          <SectionTitle  value="Processos Judiciais" glueToTop />
          <CustomTable data={processListData} columns={tableColumns} showHeader />
        </div>
      )}
    </div>
  );
};

export default OngoingInvestigations;
