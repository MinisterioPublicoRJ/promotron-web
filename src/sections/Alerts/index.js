import React from 'react';

import './styles.css';
import Api from '../../api';
import { getUser } from '../../user';
import { SectionTitle, AlertBadge } from '../../components';

import ClockIcon from '../../assets/svg/clock';
import CorujaGate from '../../assets/svg/corujaGate';
import Home from '../../assets/svg/home';
import Ouvidoria from '../../assets/svg/ouvidoria';
import Va from '../../assets/svg/va';
import Tjrj from '../../assets/svg/tjrj';
import Law from '../../assets/svg/law';
import Mprj from '../../assets/svg/mprj';
import Csi from '../../assets/svg/csi';


class Alerts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.getAlertsList();
  }
  componentDidMount() {
    this.getAlertsListTotal();
  }

  /**
   * Fetches array of alerts from API and saves to state
   * @return {void} saves to state
   */
  async getAlertsList() {
    let alerts;
    let errorAlerts = false;
    try {
      alerts = await Api.getAlertsList(getUser());
      console.log(alerts);
    } catch (e) {
      errorAlerts = true;
    } finally {
      this.setState({ alerts, errorAlerts, loading: false });
    }
  }

  async getAlertsListTotal() {
    let alertsTotal;
    let errorAlerts = false;
    try {
      alertsTotal = await Api.getAlertsListTotal(getUser());
      console.log(alertsTotal);
    } catch (e) {
      errorAlerts = true;
    } finally {
      this.setState({ alertsTotal, errorAlerts, loading: false });
    }
  }

   /**
   * Finds the details for each alert type
   * @param  {json} alert {alertCode}
   * @return {json}       { icon: node, message: node, action: null, actionLink: null, background: string }
   */

  
 
  cleanAlert(alertsTotal) {
    // this will be completed for all alert types later
    let icon = null;
    let message = null;
    const action = null;
    const actionLink = null;
    let background = null;

    switch (alertsTotal.sigla) {
      // ALERTAS DA TUTELA
      case 'DCTJ':
        icon = <Tjrj />;
        message = (
          <span>
            Há <strong>  {` ${` ${alertsTotal.count} `} `}</strong> processos criminais no TJRJ há <strong>mais de 60 dias</strong> sem retorno.
          </span>
        );
        background = '#F86C72';
        break;

      case 'DNTJ':
        icon = <Tjrj />;
        message = (
          <span>
            Há <strong> {` ${alertsTotal.count} `}</strong> processos não criminais no TJRJ há <strong>há mais de 120 dias</strong> sem retorno.
          </span>
        );
        background = '#F86C72';
        break;

      case 'MVVD':
        icon = <Ouvidoria />;
        message = (
          <span>
            Há <strong> {` ${alertsTotal.count} `} processos</strong> com <strong> vitimas recorrentes</strong> de <strong> violência domestica </strong>.
          </span>
        );
        background = '#F86C72';
        break;

      case 'PA1A':
        icon = <ClockIcon />;
        message = (
          <span>
            Há <strong> {` ${alertsTotal.count} `} </strong> <strong> processos administrativos abertos há mais de 1 ano</strong>.
          </span>
        );
        background = '#5C6FD9';
        break;

      case 'PPFP':
        icon = <ClockIcon />;
        message = (
          <span>
            Há <strong> {` ${alertsTotal.count} `}</strong> <strong> procedimentos preparatório </strong> com <strong> prazo de tratamento esgotado.</strong>
          </span>
        );
        background = '#f86c72';
        break;

      case 'IC1A':
        icon = <ClockIcon />;
        message = (
          <span>
            Há <strong> {` ${alertsTotal.count} `} </strong> <strong> inquéritos civil </strong> ativo <strong> sem prorrogação </strong> há <strong> mais de 1 ano</strong>.
          </span>
        );
        background = '#f86c72';
        break;

      case 'NF30':
        icon = <ClockIcon />;
        message = (
          <span>
            Há <strong> {` ${alertsTotal.count} `}</strong> notícias de fato autuada há mais de <strong>120 dias</strong> e ainda está <strong>sem tratamento</strong>
          </span>
        );
        background = '#f86c72';
        break;

      case 'OFFP':
        icon = <ClockIcon />;
        message = (
          <span>
            Há <strong>{` ${alertsTotal.count} `} oficios</strong> com <strong> prazo de apreciação esgotado </strong>.
          </span>
        );
        background = '#f86c72';
        break;

      case 'OUVI':
        icon = <Ouvidoria />;
        message = (
          <span>
            <strong> {` ${alertsTotal.count} `}</strong> <strong> Expediente </strong> de <strong> Ouvidoria </strong> enviado porém <strong> não recebido</strong>
          </span>
        );
        background = '#5C6FD9';
        break;

      case 'VADF':
        icon = <Va />;
        message = (
          <span>
            Você tem <strong> {` ${alertsTotal.count} `} vistas abertas </strong> em <strong> documentos sinalizados como fechado</strong>
          </span>
        );
        background = '#28A7E0';
        break;

      // ALERTAS DA PIP
      case 'GATE':
        icon = <CorujaGate />;
        message = (
          <span>
            O <strong>Gate </strong>finalizou a <strong>IT</strong> solicitada no procedimento <strong>{` ${alert.docNum} `}</strong>
          </span>
        );
        background = '#374354';
        break;

        case 'DT2I':
             icon = <Home />;
            message = (
             <span>
                <strong> {` ${alertsTotal.count} `} movimentações </strong> em processo desta promotoria na <strong> segunda instância </strong>
              </span>
              );
              background = '#5C6FD9';
             break;
             
        default:
        break;
    }

    return { icon, message, action, actionLink, background };
  }

  render() {
    const { alerts, alertsTotal, loading, errorAlerts } = this.state;

    if (loading) return <aside>Carregando...</aside>;
    return (
      <article className="alerts-wrapper">
        <div className="alerts-header">
          <SectionTitle value="central de alertas" />
          <div className="alerts-total">
          </div>
        </div>
        <div className="alerts-body">
          {alertsTotal.map((alert, i) => {
            const { icon, message, action, actionLink, background } = this.cleanAlert(alert);
            return (
              <AlertBadge
                key={alert.docNum + alert.date + i}
                icon={icon}
                iconBg={background}
                message={message}
                action={action}
                actionLink={actionLink}
                loading={errorAlerts}
              />
            );
          })}
        </div>
      </article>
    );
  }
}

export default Alerts;
