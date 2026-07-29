import React from 'react';
import { ScrollHeroSection } from './ScrollHeroSection';

interface HeroSectionProps {
  onExplore: () => void;
  onSelectFlyknit: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExplore, onSelectFlyknit }) => {
  return <ScrollHeroSection onExplore={onExplore} onSelectFlyknit={onSelectFlyknit} />;
};
