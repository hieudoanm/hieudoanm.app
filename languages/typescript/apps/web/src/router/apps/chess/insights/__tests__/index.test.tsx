import { render } from '@testing-library/react';
import { Insights } from '@web/services/chess/chess.model';
import { mockResizeObserver } from '@web/utils/mock-resize-observer';
import { ChessInsights } from '../ChessInsights';

jest.mock('next/router', () => ({
  useRouter: jest.fn().mockReturnValue({
    basePath: '',
    pathname: '',
  }),
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockReturnValue({
    asPath: '',
    events: { on: jest.fn(), off: jest.fn() },
  }),
  usePathname: jest.fn().mockReturnValue(''),
  useSearchParams: jest.fn().mockReturnValue(new URLSearchParams()),
}));

describe('ChessInsights', () => {
  beforeEach(() => {
    mockResizeObserver();
  });

  it('to match snapshot', () => {
    const { container } = render(<ChessInsights insights={{} as Insights} />);
    expect(container).toMatchSnapshot();
  });
});
