export const useTypeScriptData = () => {
  const category = [
    {name: 'enum'},
    {name: 'generic'},
    {name: 'omit', description: 'omit<Type>'},
    {name: 'typeOf'},
    {name: 'keyof'},
  ];
  return {category};
};
