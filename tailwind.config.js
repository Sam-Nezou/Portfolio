module.exports = {
    prefix: '',
    purge: {
        content: [
            './src/**/*.{html,ts}',
        ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        fontFace: {
            QuickSand: [{

                    filename: 'Quicksand_Light.otf',
                    style: 'italic',
                    weight: 100,
                    display: 'auto',
                },
                {
                    filename: 'Quicksand_Light.otf',
                },
            ]
        },

        extend: {
            colors: {
                'blueDarkColor': '#272e37',

                'spindle': {
                    DEFAULT: '#B9D7EB',
                    '50': '#FFFFFF',
                    '100': '#FFFFFF',
                    '200': '#FFFFFF',
                    '300': '#FFFFFF',
                    '400': '#E1EEF6',
                    '500': '#B9D7EB',
                    '600': '#91C0E0',
                    '700': '#6AAAD4',
                    '800': '#4293C9',
                    '900': '#3078A8'
                },
            },

        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};