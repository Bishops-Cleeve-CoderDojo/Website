import { test, expect } from '@playwright/test'

test.describe('Basic page rendering', () => {
  test('homepage renders with key content', async ({ page }) => {
    await page.goto('/')

    await expect(page).toHaveTitle(/Home \| Bishops Cleeve CoderDojo/)

    await expect(
      page.getByRole('heading', { name: '@ Bishops Cleeve' }),
    ).toBeVisible()
    await expect(page.getByText(/free coding club for children/i)).toBeVisible()
    await expect(
      page.getByRole('link', { name: 'Book a Session' }),
    ).toBeVisible()

    // Home page sections that the nav links to by anchor
    for (const id of ['about', 'activities', 'faq', 'venue', 'contact']) {
      await expect(page.locator(`#${id}`)).toBeAttached()
    }

    // Recent posts feed shows the newest 3 posts
    await expect(page.locator('section h2:has-text("Blog")')).toBeVisible()
    const feed = page.locator('section article')
    await expect(feed).toHaveCount(3)
    // Each card links to its post and shows a square featured image
    await expect(feed.locator('a[href^="/blog/"] img')).toHaveCount(3)
  })

  test('blog listing page renders', async ({ page }) => {
    await page.goto('/blog')

    await expect(page).toHaveTitle(/Blog/)
    await expect(
      page.getByRole('heading', { name: 'Blog', level: 1 }),
    ).toBeVisible()
    await expect(
      page.locator('article a[href^="/blog/"]').first(),
    ).toBeVisible()
  })

  test('individual blog post renders', async ({ page }) => {
    await page.goto('/blog/hello-world')

    await expect(page).toHaveTitle(/Hello, world!/)
    await expect(page.locator('h1').first()).toHaveText('Hello, world!')
    await expect(page.locator('article')).toBeVisible()
    await expect(
      page.getByRole('link', { name: /back to blog index/i }),
    ).toBeVisible()
  })

  test('volunteers page renders', async ({ page }) => {
    await page.goto('/')
    await page.locator('nav').getByRole('link', { name: 'Volunteer' }).click()

    await expect(page).toHaveURL(/\/volunteers$/)
    await expect(page).toHaveTitle(/Volunteering at CoderDojo/)
    await expect(page.locator('h1').first()).toHaveText(
      'Volunteering at CoderDojo',
    )
    await expect(
      page.getByRole('heading', { name: 'Applying to Volunteer' }),
    ).toBeVisible()
    // It's a page now, not a post
    await expect(
      page.getByRole('link', { name: /back to blog index/i }),
    ).toHaveCount(0)
  })

  test('blog post with inline image renders it', async ({ page }) => {
    await page.goto('/blog/christmas-2022')

    const image = page.locator('article img').first()
    await expect(image).toBeVisible()
    // naturalWidth is 0 if the image failed to load
    await expect
      .poll(() => image.evaluate(img => img.naturalWidth))
      .toBeGreaterThan(0)
  })

  test('navigation works across pages', async ({ page }) => {
    await page.goto('/')

    await page.locator('nav').getByRole('link', { name: 'Blog' }).click()

    await expect(page).toHaveURL(/\/blog/)
    await expect(page).toHaveTitle(/Blog/)
  })

  test('404 page renders', async ({ page }) => {
    const response = await page.goto('/this-does-not-exist')

    expect(response?.status()).toBe(404)
    await expect(page.locator('h1').first()).toHaveText('404: Not found')
  })
})
