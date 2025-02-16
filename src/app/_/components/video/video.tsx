import styles from './video.module.css';

interface Video {
  fields: {
    title: string;
    file: {
      url: string;
      details: { size: number };
      fileName: string;
      contentType: string;
    };
  };
  title: string;
}

export interface VideoContentProps {
  isPortrait: boolean;
  videos: Video[];
}

export function Video({ isPortrait, videos }: VideoContentProps) {
  return videos.map(({ fields }, index) => {
    return (
      <video
        key={fields.file.url}
        className={styles.video}
        style={{ width: isPortrait ? '48%' : '100%' }}
        controls
        aria-hidden
        data-testid={`video-${index}`}
      >
        <source src={`http:${fields.file.url}`}  data-testid={`video-source-${index}`} />
      </video>
    );
  });
}
