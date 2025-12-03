import { clsx } from 'clsx';
import { forwardRef } from 'react';

const Input = forwardRef(({
  label,
  error,
  className,
  ...props
}, ref) => {
  const inputClasses = clsx(
    'w-full px-4 py-3 bg-navy border-2 rounded-lg font-body text-cream',
    'placeholder:text-gray-soft',
    'focus:outline-none focus:border-coral focus:ring-2 focus:ring-coral/20',
    'transition-all duration-300',
    error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
    !error && 'border-navy hover:border-coral/50',
    className
  );

  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 text-sm font-heading font-semibold text-cream">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={inputClasses}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
