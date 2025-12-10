import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';


const meta: Meta = {
  title: 'Organisms/el-table',
  
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const table = document.createElement('el-table');
    table.setAttribute('striped', '');
    table.setAttribute('hoverable', '');
    table.innerHTML = `
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John Doe</td>
          <td>john@example.com</td>
          <td>Admin</td>
        </tr>
        <tr>
          <td>Jane Smith</td>
          <td>jane@example.com</td>
          <td>User</td>
        </tr>
        <tr>
          <td>Bob Johnson</td>
          <td>bob@example.com</td>
          <td>User</td>
        </tr>
      </tbody>
    `;
    return table;
  },
};
