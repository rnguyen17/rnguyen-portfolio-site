import * as React from 'react';

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }: HeaderProps) => <h1>{title}</h1>;
