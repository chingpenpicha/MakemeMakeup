export default string => {
  if (typeof string != 'string') return;
  const capString = string.charAt(0).toUpperCase() + string.slice(1);
  return capString.replace('_', ' ');
};
