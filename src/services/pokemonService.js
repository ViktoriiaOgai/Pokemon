const getPokemon = async (id) => {
  const resp = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  );
  if (!resp.ok) {
    throw new Error("Ошибка сети");
  }
  return resp.json();
};

export { getPokemon };