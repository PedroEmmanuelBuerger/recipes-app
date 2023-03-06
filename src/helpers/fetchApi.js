// Api de comidas, com endpoint value
const urlBebidas = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?';
const urlComidas = 'https://www.themealdb.com/api/json/v1/1/filter.php?';
export const fetchApiComidasIngrediente = async (value) => {
  const response = await fetch(`${urlComidas}i=${value}`);
  const data = await response.json();

  console.log(data);
};

export const fetchApiComidasName = async (value) => {
  const response = await fetch(`${urlComidas}s=${value}`);
  const data = await response.json();

  console.log(data);
};

export const fetchApiBebidasLetra = async (value) => {
  const response = await fetch(`${urlBebidas}f=${value}`);
  const data = await response.json();

  console.log(data);
};

export const fetchApiBebidasName = async (value) => {
  const response = await fetch(`${urlBebidas}s=${value}`);
  const data = await response.json();

  console.log(data);
};

export const fetchApiBebidasIngrediente = async (value) => {
  const response = await fetch(`${urlBebidas}i=${value}`);
  const data = await response.json();

  console.log(data);
};
