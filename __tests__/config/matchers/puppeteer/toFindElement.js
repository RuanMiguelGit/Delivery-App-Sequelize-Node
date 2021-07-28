const { result } = require("../../utils/assertionAux");
const { timeout } = require("../../constants").puppeteer;

async function toFindElement(page, selector) {
  try {
    await page.waitForTimeout(100);

    await page.waitForSelector(selector, {
      timeout,
    });

    await page.hover(selector);

    return result(page, true, `Foi possível encontrar o elemento de referência '${selector}'`);
  } catch (e) {
    return result(
      page,
      false,
      `Não foi possível encontrar o elemento de referência '${selector}':\n"${e.message}"`
    );
  }
}

module.exports = toFindElement;
