import React from 'react';

export const metadata = {
  title: 'Health Calculators | Weight Loss Tools',
  description: 'Use our health calculators to track your BMI, BMR, waist-to-hip ratio, and daily calorie needs for your weight loss journey.',
};

export default function CalculatorsLayout({ children }) {
  return (
    <div className="calculators-layout">
      {children}
    </div>
  );
}
