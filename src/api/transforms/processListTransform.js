export default function processListTransform({ procedimentos, nr_paginas }) {
  const data = procedimentos.map((process) => ({
    classeDocumento: process.classe_documento,
    docuEtiqueta: process.docu_etiqueta,
    docuNrExterno: process.docu_nr_externo,
    docuNrMp: process.docu_nr_mp,
    docuPersonagens: process.docu_personagens,
    dtUltimoAndamento: new Date(process.dt_ultimo_andamento)
      ? Intl.DateTimeFormat('pt-br', { timeZone: 'UTC' }).format(
          new Date(process.dt_ultimo_andamento),
        )
      : undefined,
    idOrgao: process.id_orgao,
    ultimoAndamento: process.ultimo_andamento,
    urlTjrj: process.url_tjrj,
    representanteDk: process.representante_dk,
    pages: nr_paginas,
  }));

  return {
    data,
    pages: nr_paginas,
  };
}
