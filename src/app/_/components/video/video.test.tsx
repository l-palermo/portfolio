import React from 'react';
import { render, screen } from '@testing-library/react';

import { Video } from './video';

const mockVideoProps = {
  isPortrait: false,
  videos: [
    {
      title: 'Example Video Title',
      fields: {
        title: 'example-video-title',
        file: {
          title: 'example-video-title',
          url: '//example.com/video.mp4',
          details: { size: 12345 },
          fileName: 'example.mp4',
          contentType: 'video/mp4',
        },
      },
    },
  ],
};

describe('VideoContent Component', () => {
  it('renders the video with correct src attribute', () => {
    render(<Video {...mockVideoProps} />);

    expect(screen.getByTestId('video-0')).toBeVisible();
    expect(screen.getByTestId('video-source-0')).toHaveAttribute('src', 'http://example.com/video.mp4');
  });
});
