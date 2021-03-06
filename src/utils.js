/**
 * format innerHTML
 *
 * @param {string} inner
 * @returns string
 */
function formatInnerHTML(inner) {
  inner = inner.replace(/(\n\s*)/g, '');
  inner = inner.replace(/^[^\S\n]+/gm, '');
  return inner;
}

module.exports = formatInnerHTML;
