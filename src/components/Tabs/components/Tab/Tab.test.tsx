import React from 'react';

import { Tabs } from '@components/index';
import { render } from '@testing-library/react';

describe('src/components/Tab', () => {
  // Check render tab at DOM
  test('It should render an Tab', () => {
    const { container } = render(<Tabs.Tab label="Hello World!" />);
    const tabComponent = container.getElementsByTagName('div')[0];
    expect(tabComponent).toBeInTheDocument();
  });

  // Check render tab with badge at DOM
  test('It should render an Tab with badge inside', () => {
    const number = '90';
    const { container } = render(<Tabs.Tab label="Hello World!" badgeNumber={number} />);
    const tabComponent = container.getElementsByClassName('badge')[0];
    expect(tabComponent).toHaveTextContent(number);
  });

  // Check render active tab
  test('It should render an active Tab', () => {
    const { container } = render(<Tabs.Tab label="Hello World!" active />);
    const tabComponent = container.getElementsByClassName('tab-active')[0];
    expect(tabComponent).toBeInTheDocument();
  });

  // Check render tab with tooltip
  test('It should render an Tab with tooltip', () => {
    const { container } = render(
      <Tabs.Tab label="Hello World!">
        <Tabs.Tooltip description="Сюда вы можете добавить текст подсказу для компонента">
          <Tabs.Icon name="IconInfoOutlined16" containerSize={16} htmlColor="var(--text-grey-500)" />
        </Tabs.Tooltip>
      </Tabs.Tab>
    );
    const tabComponent = container.getElementsByClassName('tooltip')[0];
    expect(tabComponent).toBeInTheDocument();
  });
});
