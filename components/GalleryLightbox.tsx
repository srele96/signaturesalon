'use client';

import type { ComponentProps } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export default function GalleryLightbox(
  props: ComponentProps<typeof Lightbox>,
) {
  return <Lightbox {...props} />;
}
