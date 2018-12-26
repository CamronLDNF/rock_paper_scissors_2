const { RPS } = require('../spec/spec.helper')
const BrowserHelpers = require('e2e_training_wheels')
const browser = new BrowserHelpers()
 
describe('User can play game and get result', () => {
  before( async () => {
    await browser.init();
    await browser.visitPage('http://localhost:8080/');
  });
 
  beforeEach(async () => {
    await browser.page.reload();
  });
 
  after(async () => {
    await browser.close();
  });
 
  it('by clicking on the "Rock" button', async () => {
    await browser.clickOnButton("button[name='rock-btn']")
    let content = await browser.getContent("[id='result']")
    expect(content).to.not.be.empty;
  })

  it('by clicking on the "Paper" button', async () => {
    await browser.clickOnButton("button[name='paper-btn']")
    let content = await browser.getContent("[id='result']")
    expect(content).to.not.be.empty;
  })

  it('by clicking on the "Scissors" button', async () => {
    await browser.clickOnButton("button[name='scissors-btn']")
    let content = await browser.getContent("[id='result']")
    expect(content).to.not.be.empty;
  })

});