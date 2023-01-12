export const NameSeparation = (name: string): string[] => {
  const index = name.indexOf("$");
  const filterRegion = name.slice(0, index);
  const region = name.slice(index + 1, name.length + 1);

  return [filterRegion,region];
};
