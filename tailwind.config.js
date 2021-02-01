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

                'blueDarkColor': {
                    DEFAULT: '#272e37',
                    '100': "#d4d5d7",
                    '200': "#a9abaf",
                    '300': "#7d8287",
                    '400': "#52585f",
                    '500': "#272e37",
                    '600': "#1f252c",
                    '700': "#171c21",
                    '800': "#101216",
                    '900': "#08090b"
                },
                'spindle': {
                    DEFAULT: '#B9D7EB ',
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