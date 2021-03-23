/* eslint camelcase: off */

import AlertModel from '../mainModels/AlertModel';
import { ACTION_PAINEL_COMPRAS, ACTION_OPEN_OUVIDORIA } from './AllActionTypeModels';

export default class ModelCOMP extends AlertModel {
  constructor(alert, orgao, token) {
    const { isHeader, count, contrato, item, sigla, alrt_key, contrato_iditem } = alert;

    const backgroundColor = isHeader ? '#F8BD6C' : '#D69F53';
    const actions = getCOMPActions(orgao, token, contrato, contrato_iditem, alrt_key, sigla);
    const message = getCompText(isHeader, count, contrato, item);

    super(alert, backgroundColor, actions, message, false);
  }
}

function getCOMPActions(orgao, token, contrato, itemID, alertID, alertCode) {
  return [
    new ACTION_PAINEL_COMPRAS(contrato, itemID),
    new ACTION_OPEN_OUVIDORIA(orgao, token, alertID, alertCode),
  ];
}

function getCompText(isHeader, count, contrato, item) {
  if (isHeader) {
    if (count === 1) {
      return [
        { text: 'Na sua área de atribuição, foi verificada', fontWeight: 'normal' },
        { text: ` uma compra suspeita `, fontWeight: 'bold' },
        { text: 'em contratos públicos.', fontWeight: 'normal' },
      ];
    }
    // more than one alert
    return [
      { text: 'Na sua área de atribuição, foram verificadas', fontWeight: 'normal' },
      { text: ` ${count} compras suspeitas `, fontWeight: 'bold' },
      { text: 'em contratos públicos.', fontWeight: 'normal' },
    ];
  }

  return [
    { text: 'Os valores do contrato', fontWeight: 'normal' },
    { text: ` ${contrato} `, fontWeight: 'bold' },
    { text: ', itens:', fontWeight: 'normal' },
    { text: ` ${item.substring(0, 40).toLowerCase()}... `, fontWeight: 'bold' },
    { text: 'merecem sua atenção.', fontWeight: 'normal' },
  ];
}
