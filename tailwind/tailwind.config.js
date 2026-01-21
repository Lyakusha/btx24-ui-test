module.exports = {
    content: [
        "../assets/**/*.{html,js}",
        "../views/**/*.php"
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('@bitrix24/b24style')
    ]
};