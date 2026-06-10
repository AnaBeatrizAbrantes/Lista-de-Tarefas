import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/Themes';
import { GlobalStyle } from './styles/GlobalStyle';

import Header from './components/Header';
import FormularioTarefa from './components/FormularioTarefa';
import Filtros from './components/Filtros';
import TarefaItem from './components/TarefaItem';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  const [tarefas, setTarefas] = useState(() => {
    const salvas = localStorage.getItem('tarefas');
    return salvas ? JSON.parse(salvas) : [];
  });

  const [filtro, setFiltro] = useState('todas');

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const adicionarTarefa = (texto) => {
    const novaTarefa = {
      id: Date.now(),
      texto,
      concluida: false,
    };
    setTarefas([...tarefas, novaTarefa]);
  };

  const alternarConcluida = (id) => {
    setTarefas(
      tarefas.map((t) => (t.id === id ? { ...t, concluida: !t.concluida } : t))
    );
  };

  const removerTarefa = (id) => {
    setTarefas(tarefas.filter((t) => t.id !== id));
  };


  const tarefasFiltradas = tarefas.filter((t) => {
    if (filtro === 'ativas') return !t.concluida;
    if (filtro === 'concluídas') return t.concluida;
    return true;
  });

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <FormularioTarefa adicionarTarefa={adicionarTarefa} />
      <Filtros filtroAtual={filtro} setFiltroAtual={setFiltro} />
      
      <ul style={{ listStyle: 'none' }}>
        {tarefasFiltradas.map((tarefa) => (
          <TarefaItem
            key={tarefa.id}
            tarefa={tarefa}
            alternarConcluida={alternarConcluida}
            removerTarefa={removerTarefa}
          />
        ))}
      </ul>
    </ThemeProvider>
  );
}