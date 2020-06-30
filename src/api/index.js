import axios from 'axios';

import {
  LOGIN_URL,
  TODAY_OUT,
  TODAY_OUTLIERS,
  TODAY_ENTRIES,
  OPEN_CASES_DETAILS_URL,
  COURT_CASES_DETAILS_URL,
  OPEN_INVESTIGATIONS_DETAILS_URL,
  OPEN_CASES_LIST,
  RADAR_DATA,
  PROCESSING_TIME_DATA,
  ALERTS_LIST,
  TOTAL_ALERTS_LIST,
  PROCESSES_LIST,
  SUCCESS_INDICATORS,
  PIP_RADAR_URL,
  DESK_INTEGRATED,
  DESK_DETAIL_INTEGRATED,
  PIP_MAIN_INVESTIGATIONS_URL,
  PIP_MAIN_INVESTIGATIONS_URL_ACTION,
} from './endpoints';

import { formatDateObjForBackend } from '../utils/formatters';
import {
  openInvestigationsDetailsTransform,
  openCasesDetailsTransform,
  courtCasesDetailsTransform,
  todayOutTransform,
  todayOutliersTransform,
  todayEntriesTransform,
  openCasesListTransform,
  radarTransform,
  alertsTransform,
  totalAlertsTransform,
  processingTimeTransform,
  successIndicatorsTransform,
  processListTransform,
  pipRadarTransform,
  deskIntegratedTransform,
  deskTabTransform,
} from './transforms';

import { setUser } from '../user';

const buildRequestConfig = jwt => ({ params: { jwt } });

const Api = (() => {
  async function login(token) {
    const formData = new FormData();
    formData.set('jwt', token);

    const { data } = await axios.post(LOGIN_URL, formData);

    setUser(data);
  }

  /**
   * fetches percentage info for the Today page from the backend
   * @param  {string} orgao promotoria's orgao
   * @return {number}    [description]
   */
  async function getTodayOutData({ orgao, token }) {
    const { data } = await axios.get(TODAY_OUT({ orgao }), buildRequestConfig(token));

    return todayOutTransform(data);
  }

  /**
   * fetches acervo info for the Today page from the backend
   * @param  {string} orgao promotoria's orgao
   * @param  {date} date day you want tinfo from
   * @return {json}      { acervoQtd: Number, primQ: Number, mediana, terQ: Number, cod: number }
   */
  async function getTodayOutliersData({ orgao, token }, date) {
    const dateFormated = formatDateObjForBackend(date);
    const { data } = await axios.get(
      TODAY_OUTLIERS({ orgao, date: dateFormated }),
      buildRequestConfig(token),
    );

    return todayOutliersTransform(data);
  }

  async function getTodayEntriesData({ orgao, cpf, token }) {
    const { data } = await axios.get(TODAY_ENTRIES({ orgao, cpf }), buildRequestConfig(token));

    return todayEntriesTransform(data);
  }

  async function getOpenCasesDetails({ orgao, cpf, token }) {
    const { data } = await axios.get(
      OPEN_CASES_DETAILS_URL({ orgao, cpf }),
      buildRequestConfig(token),
    );

    return openCasesDetailsTransform(data);
  }

  async function getOpenInvestigationsDetails({ orgao, token }) {
    const { data } = await axios.get(
      OPEN_INVESTIGATIONS_DETAILS_URL({ orgao }),
      buildRequestConfig(token),
    );

    return openInvestigationsDetailsTransform(data);
  }

  async function getCourtCasesDetails({ orgao, token }) {
    const { data } = await axios.get(COURT_CASES_DETAILS_URL({ orgao }), buildRequestConfig(token));

    return courtCasesDetailsTransform(data);
  }

  async function getOpenCasesList({ orgao, cpf, token }, list) {
    const { data } = await axios.get(
      OPEN_CASES_LIST({ orgao, cpf, list }),
      buildRequestConfig(token),
    );

    return openCasesListTransform(data);
  }

  async function getRadarData({ orgao, token }) {
    const { data } = await axios.get(RADAR_DATA({ orgao }), buildRequestConfig(token));

    return radarTransform(data);
  }

  async function getProcessingTimeData({ orgao, token }) {
    const { data } = await axios.get(PROCESSING_TIME_DATA({ orgao }), buildRequestConfig(token));

    return processingTimeTransform(data);
  }

  async function getAlertsList({ orgao, token }) {
    const { data } = await axios.get(ALERTS_LIST({ orgao }), buildRequestConfig(token));

    return alertsTransform(data);
  }
  
  async function getAlertsListTotal({ orgao, token }) {
    const { data } = await axios.get(TOTAL_ALERTS_LIST({ orgao }), buildRequestConfig(token));

    return totalAlertsTransform(data);
  }

  async function getsuccessIndicators({ orgao, token }) {
    const { data } = await axios.get(SUCCESS_INDICATORS({ orgao }), buildRequestConfig(token));

    return successIndicatorsTransform(data);
  }

  async function getProcessList({ orgao, cpf, token }, list) {
    const { data } = await axios.get(
      PROCESSES_LIST({ orgao, cpf, list }),
      buildRequestConfig(token),
    );

    return processListTransform(data);
  }
 
  async function getPipRadarData({ orgao, token }) {
    const { data } = await axios.get(PIP_RADAR_URL({ orgao }), buildRequestConfig(token));

    return pipRadarTransform(data);
  }

  async function getIntegratedDeskDocs({ orgao, token, cpf, docType }) {
    const { data } = await axios.get(
      DESK_INTEGRATED({ orgao, cpf, docType }),
      buildRequestConfig(token),
    );

    return deskIntegratedTransform(data);
  }

  async function getIntegratedDeskDetails({ orgao, token, cpf, docType }) {
    const { data } = await axios.get(
      DESK_DETAIL_INTEGRATED({ orgao, cpf, docType }),
      buildRequestConfig(token),
    );

    return deskTabTransform(data);
  }

  async function getMainInvestigated({ orgao, cpf, token }) {
    const { data } = await axios.get(
      PIP_MAIN_INVESTIGATIONS_URL({ orgao, cpf }),
      buildRequestConfig(token),
    );
    return data;
  }

  async function actionMainInvestigated({ orgao, cpf, token, action, representante_dk }) {
    const formData = new FormData();
    formData.set('jwt', token);
    formData.set('action', action);
    formData.set('representante_dk', representante_dk);
    const { data } = await axios.post(
      PIP_MAIN_INVESTIGATIONS_URL_ACTION({ orgao, cpf, token }),
      formData,
      buildRequestConfig(token),
    );
    return data;
  }

  return {
    login,
    getTodayOutData,
    getTodayOutliersData,
    getTodayEntriesData,
    getOpenCasesDetails,
    getOpenInvestigationsDetails,
    getCourtCasesDetails,
    getOpenCasesList,
    getRadarData,
    getAlertsList,
    getAlertsListTotal,
    getProcessingTimeData,
    getProcessList,
    getsuccessIndicators,
    getPipRadarData,
    getIntegratedDeskDocs,
    getIntegratedDeskDetails,
    getMainInvestigated,
    actionMainInvestigated,
  };
})();

export default Api;
