import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';


const meta: Meta = {
  title: 'Organisms/el-data-grid',
  
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const grid = document.createElement('el-data-grid');
    grid.setAttribute('sortable', '');
    grid.innerHTML = `
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>John Doe</td>
          <td>john@example.com</td>
          <td>Admin</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jane Smith</td>
          <td>jane@example.com</td>
          <td>User</td>
        </tr>
      </tbody>
    `;
    return grid;
  },
};
