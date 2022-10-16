module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'theme-gray': '#FCFAFA',
                'theme-green': '#00CC66',
                'theme-lilac': '#9F9FED',
                'theme-orange': '#F5853F',
                'theme-purple': '#190E4F',
                'theme-purple-light': '#342B6E',
                'theme-pink': '#E83F6F',
            },
            cursor: {
                'digital-standard':
                    'url(/public/assets/cursors/standard-cursor.svg), auto',
                'digital-pointer':
                    'url(/public/assets/cursors/pointer-cursor.svg), auto',
                'digital-text':
                    'url(/public/assets/cursors/text-cursor.svg), auto',
            },
        },
    },
    plugins: [],
};
