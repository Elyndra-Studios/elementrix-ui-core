import type { Meta, StoryObj } from '@storybook/web-components-vite';

const meta: Meta = {
  title: 'Organisms/el-carousel',
  
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const carousel = document.createElement('el-carousel');

    const slide1 = document.createElement('div');
    slide1.style.height = '300px';
    slide1.style.backgroundColor = '#3b82f6';
    slide1.style.display = 'flex';
    slide1.style.alignItems = 'center';
    slide1.style.justifyContent = 'center';
    slide1.style.color = 'white';
    slide1.textContent = 'Slide 1';

    const slide2 = document.createElement('div');
    slide2.style.height = '300px';
    slide2.style.backgroundColor = '#10b981';
    slide2.style.display = 'flex';
    slide2.style.alignItems = 'center';
    slide2.style.justifyContent = 'center';
    slide2.style.color = 'white';
    slide2.textContent = 'Slide 2';

    const slide3 = document.createElement('div');
    slide3.style.height = '300px';
    slide3.style.backgroundColor = '#f59e0b';
    slide3.style.display = 'flex';
    slide3.style.alignItems = 'center';
    slide3.style.justifyContent = 'center';
    slide3.style.color = 'white';
    slide3.textContent = 'Slide 3';

    carousel.appendChild(slide1);
    carousel.appendChild(slide2);
    carousel.appendChild(slide3);

    return carousel;
  },
};
