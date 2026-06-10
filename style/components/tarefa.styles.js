import styled from 'styled-components';

// FormularioTarefa Styles
export const FormContainer = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 1.5rem;
`;

export const Input = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.accent};
  }
`;

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background: ${({ theme }) => theme.accent};
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.accentHover};
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
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ active, theme }) => (active ? theme.accent : theme.cardBg)};
  color: ${({ active, theme }) => (active ? '#FFF' : theme.textMuted)};
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.accent};
  }
`;

// TarefaItem Styles
export const ItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: ${({ theme }) => theme.cardBg};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  margin-bottom: 0.75rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
`;

export const TaskText = styled.span`
  cursor: pointer;
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
  color: ${({ completed, theme }) => (completed ? theme.completed : theme.text)};
  flex: 1;
  margin-left: 10px;
`;

export const DeleteButton = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.danger};
  border: 1px solid transparent;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    border-color: ${({ theme }) => theme.danger};
    background: ${({ theme }) => theme.danger}10; /* Opacidade leve */
  }
`;