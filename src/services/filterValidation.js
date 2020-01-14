export default function filterValidation(inputId, filters) {
  const input = inputId;
  const excludedText = input.indexOf("Checkbox");
  let tagNonFormatted = input.slice(0, excludedText);
  if (excludedText === -1) {
    tagNonFormatted = inputId;
  }
  const tag = tagNonFormatted.toLowerCase();

  let filtrosMarcados = filters;
  if (filters.indexOf(tag) === -1) {
    filtrosMarcados.push(tag);
  } else {
    filtrosMarcados = filtrosMarcados.filter(value => value !== tag);
  }

  return filtrosMarcados
};