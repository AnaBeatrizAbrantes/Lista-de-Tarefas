import React from 'react';
import { HeaderContainer, ThemeToggleButton } from '../styles/components/Header.styles';

export default function Header({ theme, toggleTheme }) {
  return (
    <HeaderContainer>
      <h1>Taskify 🚀</h1>
      <ThemeToggleButton onClick={toggleTheme}>
        {theme === 'light' ? '🌙 Modo Escuro' : '☀️ Modo Claro'}
      </ThemeToggleButton>
    </HeaderContainer>
  );
}