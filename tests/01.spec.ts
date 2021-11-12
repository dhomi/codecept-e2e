Feature('01')

Scenario('iFrame usage', async ({ I }) => {
  I.amOnPage("http://the-internet.herokuapp.com/")
  I.click("Frames")
  I.click("iFrame")
  I.waitForText('An iFrame containing the TinyMCE WYSIWYG Editor')
  I.click('File')
  // I.switchToNextTab(1)

  // I.seeTitleEquals(titleText)
  // I.seeTextEquals(titleText.toUpperCase(), 'h1')
  // I.closeCurrentTab()
})