import React from 'react';

export interface LayoutProps {
  description?: string;
  title?: string;
  type?: string;
  imageUrl?: string;
  imageAlt?: string;
  children: React.ReactNode;
  navTitle?: string;
  className?: string;
}
