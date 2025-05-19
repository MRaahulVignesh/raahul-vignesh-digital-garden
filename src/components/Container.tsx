
import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = '', id }) => {
  return (
    <div id={id} className={`w-full max-w-4xl mx-auto lg:max-w-screen-xl px-4 sm:px-6 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
