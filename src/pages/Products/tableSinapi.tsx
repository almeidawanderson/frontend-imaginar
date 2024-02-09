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

  const renderRows = (data: any, parentIndex: number | null = null) => {
    return data.map((item: any, index: number) => {
      const isSubFase = item.tipo === 'SUB-FASE';
      const isService = item.tipo === 'SERVIÇOS';

      const RowComponent = isSubFase ? SubFaseRow : isService ? ServicesRow : FaseRow;

      const isFaseExpanded = expandedFaseIndex === index;
      const isSubFaseExpanded = expandedSubFaseIndex === index;
      const areServicesVisible = visibleServices.includes(index);

      return (
        <React.Fragment key={index}>
          <RowComponent
            onClick={() => (isSubFase ? toggleSubFases(index) : isService ? toggleServices(index) : setExpandedFaseIndex(isFaseExpanded ? null : index))}
          >
            {/* Adicionamos setas indicadoras */}
            {isSubFase && <span style={{ marginRight: '8px' }}>{isSubFaseExpanded ? '▼' : '▶'}</span>}
            {isService && <span style={{ marginRight: '16px' }}>{areServicesVisible ? '▼' : '▶'}</span>}
            {/* Conteúdo da linha */}
            <td>{item.indice}</td>
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
          {isFaseExpanded && item.subfases && item.subfases.length > 0 && renderRows(item.subfases, index)}
          {isSubFaseExpanded && item.servicos && item.servicos.length > 0 && areServicesVisible && renderRows(item.servicos, index)}
        </React.Fragment>
      );
    });
  };

  return (
    <TableContainer>
      <ContentTable>
        <thead>
          <tr>
            {IHeaders.map((header) => (
              <th key={header.key}>{header.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {DataBackend.map((fases, faseIndex) => (
            <React.Fragment key={faseIndex}>
              {fases.map((fase, subFaseIndex) => (
                <React.Fragment key={subFaseIndex}>
                  {renderRows([fase])}
                  {fase.tipo === 'FASE' && fase.subfases && fase.subfases.length > 0 && expandedFaseIndex === subFaseIndex && renderRows(fase.subfases, subFaseIndex)}
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </ContentTable>
    </TableContainer>
  );
}


