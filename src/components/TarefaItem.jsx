import React from 'react';
import { ItemContainer, TaskText, DeleteButton } from '../styles/components/Tarefa.styles';

export default function TarefaItem({ tarefa, alternarConcluida, removerTarefa }) {
  return (
    <ItemContainer>
      <input
        type="checkbox"
        checked={tarefa.concluida}
        onChange={() => alternarConcluida(tarefa.id)}
      />
      <TaskText
        completed={tarefa.concluida}
        onClick={() => alternarConcluida(tarefa.id)}
      >
        {tarefa.texto}
      </TaskText>
      <DeleteButton onClick={() => removerTarefa(tarefa.id)}>Excluir</DeleteButton>
    </ItemContainer>
  );
}