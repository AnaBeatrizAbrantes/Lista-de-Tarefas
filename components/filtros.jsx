import React from 'react';
import { FilterContainer, FilterButton } from '../styles/components/Tarefa.styles';

export default function Filtros({ filtroAtual, setFiltroAtual }) {
  return (
    <FilterContainer>
      {['todas', 'ativas', 'concluídas'].map((filtro) => (
        <FilterButton
          key={filtro}
          active={filtroAtual === filtro}
          onClick={() => setFiltroAtual(filtro)}
        >
          {filtro.charAt(0).toUpperCase() + filtro.slice(1)}
        </FilterButton>
      ))}
    </FilterContainer>
  );
}