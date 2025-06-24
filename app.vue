<template>
    <div class="App">
        <nuxt-layout>
            <nuxt-page />
        </nuxt-layout>
    </div>
</template>

<style scoped lang="scss">
.App {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}
</style>

<style lang="scss">
* {
    box-sizing: border-box;
}

body {
    --bg: #f5eedc;
    --serif: 'Merriweather';
    font-family: 'Montserrat', sans-serif;
}
</style>
