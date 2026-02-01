'use client';

import { Check, ShoppingCart, MapPin, CreditCard, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CheckoutStepsProps {
  currentStep: number;
}

const steps = [
  { number: 1, title: 'Cart Review', icon: ShoppingCart },
  { number: 2, title: 'Shipping', icon: MapPin },
  { number: 3, title: 'Payment', icon: CreditCard },
  { number: 4, title: 'Confirmation', icon: CheckCircle2 },
];

export function CheckoutSteps({ currentStep }: CheckoutStepsProps) {
  return (
    <div className="relative">
      {/* Progress Line */}
      <div className="absolute top-8 left-0 right-0 h-1 bg-muted hidden md:block">
        <div 
          className="h-full bg-gradient-brand transition-all duration-500"
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        />
      </div>

      {/* Steps */}
      <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4">
        {steps.map((step) => {
          const Icon = step.icon;
          const isCompleted = currentStep > step.number;
          const isCurrent = currentStep === step.number;
          
          return (
            <div key={step.number} className="flex flex-col items-center">
              {/* Circle */}
              <div
                className={cn(
                  'w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg',
                  isCompleted && 'bg-gradient-brand text-white',
                  isCurrent && 'bg-gradient-brand text-white scale-110',
                  !isCompleted && !isCurrent && 'bg-card text-muted-foreground'
                )}
              >
                {isCompleted ? (
                  <Check className="h-6 w-6" />
                ) : (
                  <Icon className="h-6 w-6" />
                )}
              </div>

              {/* Label */}
              <div className="mt-3 text-center">
                <p
                  className={cn(
                    'text-sm font-semibold transition-colors',
                    (isCurrent || isCompleted) ? 'text-foreground' : 'text-muted-foreground'
                  )}
                >
                  {step.title}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Step {step.number}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
