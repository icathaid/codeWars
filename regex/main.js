function validatePIN (pin) {
  res = /(^\d{4}$)|^(\d{6})$/.test(pin);
  return res;
}