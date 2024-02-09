import React from "react";
import { FaseRow, ServicesRow, SubFaseRow, TableContainer, ContentTable } from "./styles";
import IndicatorFases from "../../assets/IndicatorFases.svg";
import { DataBackend, IHeaders } from './type';
import { ReactComponent as AddFase } from "./../../assets/Adicionar.svg";
import { ReactComponent as EditFase } from "./../../assets/Edit.svg";
import { ReactComponent as DeleteFase } from "./../../assets/Lixeira.svg";
import { useState } from "react";

export function TablePhase() {
  const [visibleSubPhases, setVisibleSubPhases] = useState<number[]>([]);
  const [visibleServices, setVisibleServices] = useState<number[]>([]);
  const [expandedFaseIndex, setExpandedFaseIndex] = useState<number | null>(null);
  const [expandedSubFaseIndex, setExpandedSubFaseIndex] = useState<number | null>(null);

  function toggleSubFases(index: number) {
    setExpandedFaseIndex(null);
    setExpandedSubFaseIndex((prevIndex) => (prevIndex === index ? null : index));
  }

  function toggleServices(index: number) {
    setExpandedSubFaseIndex(null);
    setVisibleServices((prevServices) =>
      prevServices.includes(index) ? prevServices.filter((item) => item !== index) : [...prevServices, index]
    );
  }

  function addFase() {
    console.log('addFase');
  }

  function addSubFase() {
    console.log('addSubFase');
  }

  function editFase() {
    console.log('editFase');
  }

  function deleteFase() {
    console.log('deleteFase');
  }

  const renderRows = (data: any) => {
    return data.map((item: any, index: any) => {
      const isSubFase = item.tipo === 'SUB-FASE';
      const isService = item.tipo === 'SERVIÇOS';

      const RowComponent = isSubFase ? SubFaseRow : isService ? ServicesRow : FaseRow;

      return (
        <RowComponent key={index} >
          <td style={{ display: 'flex', alignItems: 'center' }}>
            <button style={{
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              marginRight: '0.8rem'
            }}
              onClick={() => console.log('click')}
            >
              <img src={IndicatorFases} alt="Fase" style={{ marginRight: '0.8rem' }} />
            </button>

            {item.indice}
          </td>
          <td>{item.tipo}</td>
          <td>{item.tabela}</td>
          <td width="50%">{item.nome}</td>
          <td>{item.unidade}</td>
          <td>{item.tipoCusto}</td>
          <td>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <AddFase onClick={addSubFase} style={{ marginRight: '1rem' }} />
              <EditFase onClick={editFase} style={{ marginRight: '1rem' }} />
              <DeleteFase onClick={deleteFase} />
            </div>
          </td>
        </RowComponent>
      );
    });
  };

  return (
    <TableContainer>
      <ContentTable>
        {IHeaders.map((header) => (
          <th key={header.key}>{header.label}</th>
        ))}

{DataBackend.map((fases, faseIndex) => (
  <React.Fragment key={faseIndex}>
    {fases.map((fase, subFaseIndex) => (
      <React.Fragment key={subFaseIndex}>
        {renderRows([fase])}
        {fase.tipo === 'FASE' && fase.subfases && fase.subfases.length > 0 && expandedFaseIndex === faseIndex &&
          renderRows(fase.subfases)}
      </React.Fragment>
    ))}
  </React.Fragment>
))}
      </ContentTable>
    </TableContainer>
  );
}
