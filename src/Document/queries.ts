

export default {
    getDocuments: `
    {
        documents(limit:5){
        DOCU_GEN
        ESTADO
        variables(nitComp:8914800302){
          DADO_ID
          TEXTO
        }
        signatures(nitComp: 8914800302) {
          FIDO_ID
          FIRMADO
        }
      }
    }
    `,
};