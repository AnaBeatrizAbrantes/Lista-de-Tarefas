import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 1.5rem;
`;

export const Input = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border-radius: 12px; /* Cantos mais arredondados e modernos */
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.cardBackground}; /* Ajustado para bater com seu Themes.js */
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 10px rgba(139, 92, 246, 0.2); /* Micro brilho ao digitar */
  }
`;

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background: ${({ theme }) => theme.primary}; /* Ajustado para o Roxo Neon */
  color: ${({ theme }) => theme.buttonText};
  border: none;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 4px 15px rgba(139, 92, 246, 0.35); /* Sombra Neon! */

  &:hover {
    background: ${({ theme }) => theme.primaryHover};
    box-shadow: 0px 4px 20px rgba(167, 139, 250, 0.6);
    transform: translateY(-1px); /* Efeito flutuante */
  }
`;

// Filtros Styles
export const FilterContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 1.5rem;
`;

export const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: 1px solid ${({ active, theme }) => (active ? theme.primary : theme.border)};
  background: ${({ active, theme }) => (active ? theme.primary : theme.cardBackground)};
  color: ${({ active, theme }) => (active ? '#FFF' : theme.textSecondary)};
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: ${({ active }) => (active ? '0px 4px 12px rgba(139, 92, 246, 0.3)' : 'none')};

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    color: #FFF;
  }
`;

// TarefaItem Styles
export const ItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: ${({ theme }) => theme.cardBackground};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  margin-bottom: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15); /* Sombra mais marcada para o modo escuro */
  transition: all 0.3s ease;
`;

export const TaskText = styled.span`
  cursor: pointer;
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
  color: ${({ completed, theme }) => (completed ? theme.textSecondary : theme.text)};
  opacity: ${({ completed }) => (completed ? 0.5 : 1)}; /* Deixa a tarefa concluída meio apagadinha */
  flex: 1;
  margin-left: 10px;
  transition: all 0.2s ease;
`;

export const DeleteButton = styled.button`
  background: transparent;
  color: #EF4444; /* Cor de alerta direta */
  border: 1px solid transparent;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    border-color: #EF4444;
    background: rgba(239, 68, 68, 0.1); /* Opacidade vermelha leve */
  }
`;