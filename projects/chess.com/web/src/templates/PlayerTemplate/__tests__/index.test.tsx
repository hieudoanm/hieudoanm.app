import { render } from '@testing-library/react';
import { PlayerTemplate } from '..';
import { mockResizeObserver } from '@chess/common/utils/mock-resize-observer';

jest.mock('next/router', () => ({
  useRouter: jest
    .fn()
    .mockReturnValue({ asPath: '', events: { on: jest.fn(), off: jest.fn() } }),
}));

describe('PlayerTemplate', () => {
  beforeEach(() => {
    mockResizeObserver();
  });

  it('to match snapshot', () => {
    const { container } = render(<PlayerTemplate />);
    expect(container).toMatchSnapshot();
  });
});
