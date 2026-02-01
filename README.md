# 📱 Pokédex

Uma aplicação web moderna de Pokédex desenvolvida com React, TypeScript e Vite, consumindo a [PokéAPI](https://pokeapi.co/).

## ✨ Características

- 🎨 **Tema Claro/Escuro**: Alterne entre temas com um clique
- 🔄 **Scroll Infinito**: Carregamento automático de mais pokémons ao rolar a página
- 📱 **Responsivo**: Design adaptável para todos os dispositivos
- ⚡ **Performance**: Cache inteligente com React Query
- 🎯 **Detalhes Completos**: Visualize informações detalhadas de cada pokémon

## 🚀 Tecnologias

- **React 19** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool ultrarrápido
- **TailwindCSS 4** - Framework CSS utilitário
- **React Query** - Gerenciamento de estado assíncrono
- **React Router** - Roteamento da aplicação
- **PokéAPI** - API RESTful de pokémons

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/andre-arcanjo/pokedex.git

# Entre no diretório
cd pokedex

# Instale as dependências
npm install
```

## 🎮 Como Usar

### Desenvolvimento

```bash
npm run dev
```

Acesse `http://localhost:5173` no navegador.

### Build para Produção

```bash
npm run build
```

### Preview da Build

```bash
npm run preview
```

### Deploy no GitHub Pages

```bash
npm run deploy
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── ListOfPokemons/    # Lista de pokémons com scroll infinito
│   └── PokemonDetails/    # Página de detalhes do pokémon
├── contexts/
│   ├── theme.ts           # Configurações de tema
│   └── ThemeContext.tsx   # Contexto de tema
├── hooks/
│   ├── fetchPokemon.ts    # Hook para buscar um pokémon
│   ├── fetchPokemons.ts   # Hook para buscar lista de pokémons
│   ├── getPokemonIdFromUrl.ts
│   └── getPokemonImageUrl.ts
├── styles/
│   └── globals.css        # Estilos globais
└── types/
    └── types.ts           # Tipos TypeScript
```

## 🎨 Funcionalidades

### Lista de Pokémons
- Exibição em grid responsivo
- Scroll infinito para carregar mais pokémons
- Alternância de tema claro/escuro
- Imagens oficiais de cada pokémon

### Detalhes do Pokémon
- Tipos do pokémon
- Estatísticas (HP, Ataque, Defesa, etc.)
- Imagem oficial em alta qualidade
- Navegação de volta para lista

