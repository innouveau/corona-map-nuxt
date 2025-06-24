export default defineNuxtConfig({
    modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/image', '@pinia/nuxt', '@nuxt/ui'],
    devtools: { enabled: true },
    app: {
        head: {
            title: 'Innouveau - Corona Kaart',
            htmlAttrs: {
                lang: 'nl',
            },
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Dosis:wght@700&family=Inconsolata&family=Merriweather:ital,wght@0,400;0,700;0,900;1,700;1,900&family=Montserrat:wght@300;400;700;900&display=swap',
                },
            ],
        },
    },
    css: ['~/assets/css/main.css'],
})

//
