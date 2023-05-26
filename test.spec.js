import { Selector } from 'testcafe'

fixture`Login`

test
  .page('https://payment-express.net/')
  ('Loads login', async t => {
    // Redirects to govhub.com login page
    const host = await t.eval(() => window.location.host)
    await t.expect(host).contains('govhub.com')

    // Username input is visible
    await t.expect(Selector('#idp-discovery-username').with({ timeout: 60_000 }).visible).ok()
  })
