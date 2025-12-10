import { Component, Prop, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'el-portal',
  styleUrl: 'el-portal.scss',
  shadow: true,
})
export class ElPortal {
  /** Target selector or element */
  @Prop() target: string = 'body';

  @Element() el!: HTMLElement;

  private portalContainer?: HTMLElement;

  componentDidLoad() {
    this.renderPortal();
  }

  componentDidUpdate() {
    this.renderPortal();
  }

  disconnectedCallback() {
    if (this.portalContainer) {
      this.portalContainer.remove();
    }
  }

  private renderPortal() {
    const targetEl = typeof this.target === 'string' 
      ? document.querySelector(this.target) 
      : this.target;

    if (!targetEl) return;

    if (!this.portalContainer) {
      this.portalContainer = document.createElement('div');
      this.portalContainer.className = 'el-portal-container';
    }

    // Move slotted content to portal
    const slot = this.el.shadowRoot?.querySelector('slot');
    if (slot) {
      const nodes = slot.assignedNodes();
      nodes.forEach(node => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          this.portalContainer?.appendChild(node.cloneNode(true));
        }
      });
    }

    targetEl.appendChild(this.portalContainer);
  }

  render() {
    return (
      <Host class="el-portal">
        <slot />
      </Host>
    );
  }
}
