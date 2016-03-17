/**
 * Returns type of argument.
 * @param value - The value for the type check.
 * @returns {String} - The name of type. For null returns null.
 */
function typeOf(value) {
  var res = typeof value;

  if (res == 'object' && res === null) {
    res = 'null';
  }

  return res;
}
