import Link from "next/link";
import React from 'react';

import { CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface FeatureCardProps {
  icon: React.ReactNode;
  backgroundColor: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, backgroundColor, title, description, buttonLabel, buttonHref }) => {
  return (
    <div className={`bg-${backgroundColor} bg-card hover:shadow-2xl transition-shadow duration-500`}>
      <div className="flex flex-col items-center justify-center gap-6 p-8">
        <div className="rounded-full p-4">{icon}</div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed">{description}</p>
        <div className="flex flex-col items-center gap-4 w-full">
          <Button
            className="font-semibold py-4 px-8 rounded-md transition-colors duration-500 w-full bg-card dark:text-white border-accent hover:bg-secondary"
            variant="outline"
          >
            {buttonLabel}
          </Button>
          <Link
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 text-base font-medium"
            href={buttonHref}
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
