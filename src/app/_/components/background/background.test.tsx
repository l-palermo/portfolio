import { render, screen, waitFor } from '@testing-library/react';

import { Background } from './background';

describe('Background component', () => {
  it('should render without crashing', () => {
    render(<Background />);
    expect(screen.getByTestId('background')).toBeVisible();
  });

  it('should have a div with the correct class', () => {
    render(<Background />);
    expect(screen.getByTestId('background')).toHaveClass('background');
  });

  it('should update background on mouse move', async () => {
    render(<Background />);
    const div = screen.getByTestId('background');

    div.style.setProperty = jest.fn();

    const mouseMoveEvent = new MouseEvent('mousemove', {
      clientX: 100,
      clientY: 100,
    });

    document.dispatchEvent(mouseMoveEvent);

    await waitFor(() => {
      expect(div.style.setProperty).toHaveBeenCalledWith(
        'background',
        'radial-gradient(at 9.765625% 13.020833333333334%, var(--color-light-blue) 0%, var(--color-dark-blue) 100%)',
      );
    });
  });
});
