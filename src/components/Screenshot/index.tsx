import type {ReactNode} from 'react';
import styles from './styles.module.css';

type Props = {
  src: string;
  caption: string;
  width?: number;
};

export default function Screenshot({src, caption, width}: Props): ReactNode {
  return (
    <figure className={styles.figure} style={width ? {maxWidth: width} : undefined}>
      <img className={styles.shot} src={src} alt={caption} />
      <figcaption className={styles.caption}>{caption}</figcaption>
    </figure>
  );
}

export function ScreenshotRow({children}: {children: ReactNode}): ReactNode {
  return <div className={styles.row}>{children}</div>;
}
