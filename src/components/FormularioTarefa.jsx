import React, { useState } from 'react';
import { FormContainer, Input, Button } from '../styles/components/Tarefa.styles';

export default function FormularioTarefa({ adicionarTarefa }) {
  const [texto, setTexto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!texto.trim()) return;
    adicionarTarefa(texto);
    setTexto('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Adicione uma nova tarefa..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <Button type="submit">Adicionar</Button>
    </FormContainer>
  );
}