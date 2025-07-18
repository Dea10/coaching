# 🧩 Pokedex Pagination Challenge

This technical challenge is designed to evaluate your ability to work with a public API, implement controlled pagination, follow a visual design (if provided), and write clean, maintainable code.

## 🎯 Objective

Build a simple Pokedex using React that fetches and displays a list of Pokémon from the [PokéAPI](https://pokeapi.co/), with client-controlled pagination.

## 🛠️ Requirements

1. Display a paginated list of Pokémon.
2. Implement pagination controls: `Previous`, `Next`, and optionally page numbers.
3. Use this endpoint:  https://pokeapi.co/api/v2/pokemon?limit=10&offset=0
4. Allow the user to select how many items to display per page (e.g. 5, 10, or 20).
5. Make sure the UI is responsive.
6. (Optional) Follow the provided Figma design or build your own clean and usable layout.

## 💬 Evaluation Criteria

- Proper usage of `useState`, `useEffect`, and controlled state
- Correct offset/limit calculations and API calls
- Code readability and organization
- Ability to explain your implementation clearly while coding
- Adaptability to requirement changes
- (Optional) Visual alignment with the design (if given)

## 🚀 Getting Started

```bash
npm install
npm run dev
