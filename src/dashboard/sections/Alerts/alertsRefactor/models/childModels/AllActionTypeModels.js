/* eslint max-classes-per-file: off */

import ActionModel from '../mainModels/ActionModel';
import {
  LINK_ACTION_OPEN_OUVIDORIA,
  LINK_ACTION_PAINEL_COMPRAS,
} from '../../../../../../api/endpoints';

//
// DELETE ACTIONS
//
export class ACTION_DELETE extends ActionModel {
  constructor() {
    super('delete', 'dispensar', '#F86C72', '');
  }
}

//
// LINK ACTIONS
//
export class ACTION_PAINEL_COMPRAS extends ActionModel {
  constructor(contrato, idItem) {
    const link = LINK_ACTION_PAINEL_COMPRAS({ contrato, idItem });
    super('link', 'Painel de Compras', '#F8BD6C', link);
  }
}

export class ACTION_PAINEL_SANEAMENTO extends ActionModel {
  // link: `https://geo.mprj.mp.br/portal/apps/experiencebuilder/experience/?id=35ae775b7f37418c9c65f47d62943d67&page=page_10`,
  constructor(link) {
    super('link', 'Painel do Saneamento', '#71D0A4', link);
  }
}

//
// DOWNLOAD ACTIONS
//
export class ACTION_DOWNLOAD_IT extends ActionModel {
  // link: `http://apps.mprj.mp.br/gate/api/Cidadao/downloadPDF/${alertIdExtra}`,
  constructor(link) {
    super('download', 'Baixar IT', '#71D0A4', link);
  }
}

export class ACTION_GENERATE_DOC extends ActionModel {
  constructor(link) {
    super('download', 'Gerar Peça', '#71D0A4', link);
  }
}

export class ACTION_GENERATE_MINUTA extends ActionModel {
  constructor(link) {
    super('download', 'Elaborar minuta', '#71D0A4', link);
  }
}

// TODO: CHECK IF IT WILL STILL EXIST
export class ACTION_DOWNLOAD_LIST extends ActionModel {
  constructor(link) {
    super('download', 'Baixar lista', '#71D0A4', link);
  }
}

export class ACTION_EXTEND_DEADLINE extends ActionModel {
  constructor(link) {
    super('download', 'Prorrogar', '#F8BD6C', link);
  }
}

//
// COMPLAINT ACTIONS
//
export class ACTION_OPEN_OUVIDORIA extends ActionModel {
  constructor(orgao, token, alertID, alertCode) {
    const link = LINK_ACTION_OPEN_OUVIDORIA({ orgao, token, alertID, alertCode });
    super('openComplaint', 'Ouvidoria', '#5C6FD9', link);
  }
}

//
// OVERLAY ACTIONS
//
export class ACTION_OVERLAY_CALCULO extends ActionModel {
  constructor() {
    super('overlay', 'Ver Cálculo', '#F8BD6C', '');
  }
}

export class ACTION_OVERLAY_DETAIL extends ActionModel {
  constructor() {
    super('overlay', 'Ver Ação', '#F8BD6C', '');
  }
}
