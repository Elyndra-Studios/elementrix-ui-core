import type { Meta, StoryObj } from '@storybook/web-components-vite';

const meta: Meta = {
  title: 'Molecules/el-accordion',
  
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const accordion = document.createElement('el-accordion');

    const item1 = document.createElement('el-accordion-item');
    item1.setAttribute('heading', 'Section 1');
    item1.textContent = 'Content for section 1';

    const item2 = document.createElement('el-accordion-item');
    item2.setAttribute('heading', 'Section 2');
    item2.textContent = 'Content for section 2';

    const item3 = document.createElement('el-accordion-item');
    item3.setAttribute('heading', 'Section 3');
    item3.textContent = 'Content for section 3';

    accordion.appendChild(item1);
    accordion.appendChild(item2);
    accordion.appendChild(item3);

    return accordion;
  },
};
