export default function formatPhoneNumber(number) {
  /* eslint-disable no-useless-escape */
  let formattedNumber = number;
  if (formattedNumber.indexOf('+') === -1) {
    formattedNumber = `+${formattedNumber}`;
    if (formattedNumber.indexOf('8') === 1) {
      formattedNumber = formattedNumber.replace(/8/, 7);
    }
  }

  return formattedNumber.replace(/([-\s\)\(])/g, '');
}
