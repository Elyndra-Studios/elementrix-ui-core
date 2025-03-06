import { newE2EPage } from '@stencil/core/testing';

describe('elx-button', () => {
  it('renders with default props', async () => {
    const page = await newE2EPage();
    await page.setContent('<elx-button>Click Me</elx-button>');
    await page.waitForChanges();

    const element = await page.find('elx-button');
    const button = await page.find('elx-button >>> button');
    expect(button).toHaveClass('elx-button');
    expect(button).toHaveClass('primary');
    expect(button).toHaveClass('medium');
    expect(button).toHaveClass('radius-medium');
    expect(element.textContent).toBe('Click Me');
  });

  it('applies variant prop correctly', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <style>
        :root {
          --elx-color-secondary: #6b7280;
        }
      </style>
      <elx-button variant="secondary">Click Me</elx-button>
    `);
    await page.waitForChanges();

    const button = await page.find('elx-button >>> button');
    expect(button).toHaveClass('secondary');
    expect(button).not.toHaveClass('primary');

    const styles = await page.evaluate(() => {
      const btn = document.querySelector('elx-button')?.shadowRoot?.querySelector('button');
      return window.getComputedStyle(btn!).backgroundColor;
    });
    expect(styles).toBe('rgb(107, 114, 128)');
  });

  it('applies size prop correctly', async () => {
    const page = await newE2EPage();
    await page.setContent('<elx-button size="large">Click Me</elx-button>');
    await page.waitForChanges();

    const button = await page.find('elx-button >>> button');
    expect(button).toHaveClass('large');
    expect(button).not.toHaveClass('medium');

    const styles = await page.evaluate(() => {
      const btn = document.querySelector('elx-button')?.shadowRoot?.querySelector('button');
      return window.getComputedStyle(btn!).padding;
    });
    expect(styles).toBe('12px 24px');
  });

  it('applies radius prop with design tokens', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <style>
        :root {
          --elx-radius-large: 18px;
        }
      </style>
      <elx-button radius="large">Click Me</elx-button>
    `);
    await page.waitForChanges();

    const button = await page.find('elx-button >>> button');
    expect(button).toHaveClass('radius-large');

    const styles = await page.evaluate(() => {
      const btn = document.querySelector('elx-button')?.shadowRoot?.querySelector('button');
      return window.getComputedStyle(btn!).borderRadius;
    });
    expect(styles).toBe('18px');
  });

  it('applies design tokens correctly', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <style>
        :root {
          --elx-color-primary: #00a8e8;
          --elx-font-family: 'Inter', sans-serif;
          --elx-font-size: 18px;
        }
      </style>
      <elx-button>Click Me</elx-button>
    `);
    await page.waitForChanges();

    const styles = await page.evaluate(() => {
      const btn = document.querySelector('elx-button')?.shadowRoot?.querySelector('button');
      const computed = window.getComputedStyle(btn!);
      return {
        backgroundColor: computed.backgroundColor,
        fontFamily: computed.fontFamily,
        fontSize: computed.fontSize,
      };
    });

    expect(styles.backgroundColor).toBe('rgb(0, 168, 232)');
    expect(styles.fontFamily).toContain('Inter');
    expect(styles.fontSize).toBe('18px');
  });

  it('emits click event', async () => {
    const page = await newE2EPage();
    await page.setContent('<elx-button>Click Me</elx-button>');
    await page.waitForChanges();

    const button = await page.find('elx-button >>> button');
    const clickSpy = await page.spyOnEvent('click');

    await button.click();
    await page.waitForChanges();
    expect(clickSpy).toHaveReceivedEvent();
  });

  it('disables button interaction when disabled', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <style>
        :root {
          --elx-color-primary: #00a8e8;
        }
      </style>
      <elx-button disabled>Click Me</elx-button>
    `);
    await page.waitForChanges();

    const button = await page.find('elx-button >>> button');
    expect(button).toHaveClass('disabled');
    expect(await button.getAttribute('disabled')).toBe('');

    const styles = await page.evaluate(() => {
      const btn = document.querySelector('elx-button')?.shadowRoot?.querySelector('button');
      return window.getComputedStyle(btn!).opacity;
    });
    expect(styles).toBe('0.5');

    // Spy on the inner button, not the host
    const clickSpy = await button.spyOnEvent('click');
    await button.click();
    await page.waitForChanges();
    expect(clickSpy).not.toHaveReceivedEvent();
  });
});
