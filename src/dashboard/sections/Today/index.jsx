import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import Api from '../../../api';
import { useAuth } from '../../../app/authContext';
import { abbrevName, capitalizeTitle } from '../../../utils';
import PromotronGif from '../../../assets/gifs/promotron.gif';
import NOMES_PROMOTORIAS from '../../../utils/nomesPromotorias';
import { MainTitle, Spinner } from '../../../components/layoutPieces';
import { GlossaryBook, IntroScreenInterrogation } from '../../../assets';

const propTypes = {
  setIsSelectorOpen: PropTypes.func.isRequired,
  setModalType: PropTypes.func.isRequired,
  setModalData: PropTypes.func.isRequired,
  setIsIntroOpen: PropTypes.func.isRequired,
};

function Today({ setIsSelectorOpen, setModalType, setModalData, setIsIntroOpen }) {
  const { user, buildRequestParams, currentOffice, logout } = useAuth();

  /* STATE */
  const [isLogoutBtnVisible, setIsLogoutBtnVisible] = useState(false);
  const [todayPercent, setTodayPercent] = useState(null);
  const [apiError, setApiError] = useState(0);
  const [groupName, setgroupName] = useState('');
  const [collectionAnalysis, setCollectionAnalysis] = useState('');
  const [entriesData, setEntriesData] = useState();

  // runs on "mount" only
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => loadComponent(), []);

  function loadComponent() {
    loadTodayPercentages();
    loadCollection();
    loadEntriesInfo();
  }

  /**
   * Returns the greeting to be shown on the page
   * @return {string} [description]
   */
  function assembleGreeting() {
    const infoUser = capitalizeTitle(user.nome.split(' ')[0]);
    const hours = new Date().getHours();

    let timeGreeting;

    if (hours >= 6 && hours < 12) {
      timeGreeting = 'bom dia';
    } else if (hours >= 12 && hours < 18) {
      timeGreeting = 'boa tarde';
    } else {
      timeGreeting = 'boa noite';
    }

    return `Olá Dr(a). ${infoUser}, ${timeGreeting}!`;
  }

  /**
   * uses ${currentOffice.codigo} to open the mapatron modal
   * @param  {number} mapatronData
   * @return {void}  updates the state
   */
  function openMapaTron(mapatronData) {
    setModalType('mapatron');
    setModalData(mapatronData);
  }

  /**
   * loads percentage data for the first sentence
   * @return {void}
   */
  async function loadTodayPercentages() {
    let res;
    try {
      res = await Api.getTodayOutData(buildRequestParams());

      setTodayPercent(res ? `${(res * 100).toFixed(0)}%` : '0%');
    } catch (e) {
      res = undefined;
      setApiError((prevCount) => prevCount + 1);
    }
  }

  /**
   * loads/reloads info an calls formatters for second sentence data
   * @return {void}
   */
  async function loadCollection() {
    let phrase = '';
    let groupNameRes;

    try {
      const today = new Date();
      const { primQ, terQ, acervoQtd, cod } = await Api.getTodayOutliersData(
        buildRequestParams(),
        today,
      );
      phrase = analyzeCollection(primQ, terQ, acervoQtd);
      groupNameRes = NOMES_PROMOTORIAS[cod];

      setgroupName(groupNameRes);
      setCollectionAnalysis(phrase);
    } catch (e) {
      setApiError((prevCount) => prevCount + 1);
    }
  }

  /**
   * returns the right comment based on collection size
   * @param  {number} lower  1st quartile limit
   * @param  {number} higher 3rd quartile limit
   * @param  {number} amount current collection
   * @return {string}        sentence to be used in second paragraph
   */
  function analyzeCollection(lower, higher, amount) {
    if (amount < lower) {
      return 'razoavelmente menor que os';
    }

    if (amount > higher) {
      return 'razoavelmente maior que os';
    }

    return 'de volume regular comparado aos';
  }

  /**
   * loads/reloads info an calls formatters for third sentence data
   * @return {void}
   */
  async function loadEntriesInfo() {
    try {
      const { hout, lout, numEntries: amount } = await Api.getTodayEntriesData(
        buildRequestParams(),
      );
      setEntriesData(
        amount
          ? { dayType: amount < lout || amount > hout ? ' atípico ' : 'típico', amount }
          : 'empty',
      );
    } catch (e) {
      setApiError((prevCount) => prevCount + 1);
    }
  }

  const loading = !(apiError === 3) && !(todayPercent || collectionAnalysis || entriesData);

  return (
    <article className="today-outer">
      <div className="user-area">
        <MainTitle value={assembleGreeting()} glueToTop />
        {user.orgaosValidos && user.orgaosValidos.length ? (
          <button
            type="button"
            className={`logout-arrow ${isLogoutBtnVisible ? 'logout-arrow--rotated' : ''}`}
            onClick={() => setIsLogoutBtnVisible((prevValue) => !prevValue)}
          />
        ) : null}
        <button
          type="button"
          className={`logout-btn ${isLogoutBtnVisible ? 'logout-btn--visible' : ''}`}
          disabled={!isLogoutBtnVisible}
          onClick={logout}
        >
          CLIQUE PRA SAIR
        </button>
      </div>
      <div className="today-content">
        <button type="button" onClick={setIsSelectorOpen} disabled={!user.orgaosValidos[0]}>
          <h2>Resumo do dia </h2>
          {currentOffice.nomeOrgao && ' na '}
          {currentOffice.nomeOrgao && <span>{abbrevName(currentOffice.nomeOrgao)}</span>}
        </button>
        <div className="today-textArea">
          {apiError === 3 && <p>Sem dados para exibir.</p>}
          {loading && <Spinner size="large" />}
          {todayPercent && !loading ? (
            <p>
              Nos últimos seis meses a sua promotoria foi mais resolutiva que
              <span style={{ fontWeight: 'bold' }}>{` ${todayPercent} `}</span>
              da casa entre aquelas de mesma atribuição.
              {todayPercent > 0.5 && <span style={{ fontWeight: 'bold' }}>Parabéns!</span>}
            </p>
          ) : null}
          {collectionAnalysis && !loading && (
            <p>
              Você sabia que seu acervo é
              <span style={{ fontWeight: 'bold' }}>{` ${collectionAnalysis} `}</span>
              dos seus colegas das
              <span style={{ fontWeight: 'bold' }}>{` ${groupName}?`}</span>
            </p>
          )}
          {entriesData && entriesData.dayType && !loading && (
            <p>
              Hoje temos um dia
              <span style={{ fontWeight: 'bold' }}>{` ${entriesData.dayType} `}</span>
              com a entrada de
              <span style={{ fontWeight: 'bold' }}>{` ${entriesData.amount} `}</span>
              novos feitos.
            </p>
          )}
          {entriesData && entriesData === 'empty' && !loading && (
            <p>Percebi que ainda não temos vistas abertas para hoje!</p>
          )}
        </div>
      </div>
      {currentOffice.tipo === 2 && !currentOffice.isSpecialized ? (
        <button
          type="button"
          className="today-btn"
          onClick={() => openMapaTron(currentOffice.codigo)}
        >
          Ver mapa da atuação
        </button>
      ) : null}
      <div className="today-robotPic">
        <button
          type="button"
          className="today-glossaryBtn"
          onClick={() => setModalType('glossary')}
        >
          <GlossaryBook />
        </button>
        <button type="button" className="today-introBtn" onClick={() => setIsIntroOpen(true)}>
          <IntroScreenInterrogation />
        </button>
        <img height="100%" src={PromotronGif} alt="robô-promoton" />
      </div>
    </article>
  );
}

Today.propTypes = propTypes;
export default Today;
