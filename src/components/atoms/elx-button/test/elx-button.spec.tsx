import { newSpecPage } from '@stencil/core/testing';
import { ElxButton } from '../elx-button';

describe('elx-button', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [ElxButton],
      html: `<elx-button>Click Me</elx-button>`,
    });
    expect(page.root).toEqualHtml(`
      <elx-button>
        <mock:shadow-root>
          <button class="elx-button primary medium radius-medium">
            <slot></slot>
          </button>
        </mock:shadow-root>
        Click Me
      </elx-button>
    `);
  });

  it('applies variant prop correctly', async () => {
    const page = await newSpecPage({
      components: [ElxButton],
      html: `<elx-button variant="secondary">Click Me</elx-button>`,
    });
    expect(page.root.shadowRoot.querySelector('button')).toHaveClass('secondary');
  });

  it('applies size prop correctly', async () => {
    const page = await newSpecPage({
      components: [ElxButton],
      html: `<elx-button size="large">Click Me</elx-button>`,
    });
    expect(page.root.shadowRoot.querySelector('button')).toHaveClass('large');
  });

  it('applies radius prop correctly', async () => {
    const page = await newSpecPage({
      components: [ElxButton],
      html: `<elx-button radius="small">Click Me</elx-button>`,
    });
    expect(page.root.shadowRoot.querySelector('button')).toHaveClass('radius-small');
  });
});
