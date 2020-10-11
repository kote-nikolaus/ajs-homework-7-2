import formatPhoneNumber from '../basic';

test('should format phone number', () => {
  expect(formatPhoneNumber('8 (965) 322-02-67')).toBe('+79653220267');
});

test('should format phone number 2', () => {
  expect(formatPhoneNumber('+7 (965) 322-02-67')).toBe('+79653220267');
});

test('should format phone number 3', () => {
  expect(formatPhoneNumber('+7840 (965) 322-02-67')).toBe('+78409653220267');
});

test('should format phone number 4', () => {
  expect(formatPhoneNumber('+86 (965) 322 02 67')).toBe('+869653220267');
});

test('should format phone number 5', () => {
  expect(formatPhoneNumber('8 965 3220267')).toBe('+79653220267');
});

test('should format phone number 6', () => {
  expect(formatPhoneNumber('7 965 3220267')).toBe('+79653220267');
});
