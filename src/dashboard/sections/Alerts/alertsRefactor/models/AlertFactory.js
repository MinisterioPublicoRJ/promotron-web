import { ModelCOMP } from './childModels';

export default function alertFactory(alertList, cpf, token, orgao) {
  return alertList.map((alert) => {
    switch (alert.sigla) {
      case 'COMP':
        return new ModelCOMP(alert, orgao, token);
    }
  });
  // // ALERTAS DA TUTELA
  // case 'DCTJ':
  // return dctjConstructor(alert);
  //
  // case 'DNTJ':
  // return dntjConstructor(alert);
  //
  // case 'MVVD':
  // return mvvdConstructor(alert);
  //
  // case 'PA1A':
  // return pa1aConstructor(alert);
  //
  // case 'PPFP':
  // return ppfpConstructor(alert, cpf, token);
  //
  // case 'PPPV':
  //   return pppvConstructor(alert,cpf, token);
  //
  // case 'IC1A':
  // return ic1aConstructor(alert, cpf, token);
  //
  // case 'NF30':
  //   return nf30Constructor(alert);
  //
  // case 'OFFP':
  // return offpConstructor(alert);
  //
  // case 'OUVI':
  // return ouviConstructor(alert);
  //
  // case 'VADF':
  // return vadfConstructor(alert);
  //
  // case 'BDPA':
  // return bdpaConstructor(alert);
  //
  // // ALERTAS DE COMPRAS
  //
  // case 'ISPS':
  //   return ispsConstructor(alert, orgao, token);
  //
  // case 'RO':
  //   return roOccurrence(alert, token);
  //
  // case 'ABR1':
  //   return abr1Constructor(alert,cpf, token);
  //
  // // ALERTAS DE PRESCRIÇÃO
  // case 'PRCR':
  // case 'PRCR1':
  // case 'PRCR2':
  // case 'PRCR3':
  // case 'PRCR4':
  //   return prcrConstructor(alert, cpf, token);
  //
  // // ALERTAS DA PIP
  // case 'GATE':
  //   return gateConstructor(alert);
  //
  // case 'DT2I':
  //   return dt2iConstructor(alert);
  //
  // case 'CTAC':
  //   return ctacConstructor(alert);
  //
  // case 'FEBT':
  //   return febtConstructor(alert);
}
