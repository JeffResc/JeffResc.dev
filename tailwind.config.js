module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    safelist: [
        'mt-2',
        'text-4xl',
        'text-3xl',
        'text-2xl',
        'text-xl',
        'text-lg',
        'text-sm',
        'text-base',
        'text-sky-400',
        'after:content-[\'_↗\']',
        'list-disc',
        'pl-4',
        'min-w-full',
        'text-xs',
        'text-right',
        'border-b',
        'border-opacity-20',
        'border-neutral-700',
        'bg-neutral-800',
    ],
    theme: {
        fontSize: {
            'xs': '.75rem',
            'sm': '.875rem',
            'tiny': '.875rem',
            'base': '1rem',
            'lg': '1.125rem',
            'xl': '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
            '7xl': '5rem'
        },
        extend: {
            screens: {
                'betterhover': { 'raw': '(hover: hover)' },
            }
        },
    },
    plugins: [
        require('tailwind-scrollbar')
    ],
}