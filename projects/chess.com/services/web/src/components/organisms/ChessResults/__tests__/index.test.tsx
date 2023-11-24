import { Insights } from '@chess/types/chess';
import { mockResizeObserver } from '@chess/common/utils/mock-resize-observer';
import { render } from '@testing-library/react';
import { ChessResults } from '..';

describe('ChessResults', () => {
  beforeEach(() => {
    mockResizeObserver();
  });

  it('to match snapshot', () => {
    const { container } = render(<ChessResults insights={{} as Insights} />);
    expect(container).toMatchSnapshot();
  });
});
