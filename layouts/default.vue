<template>
	<div>
		<Nav />

		<main>
			<slot />
		</main>
	</div>
</template>

<style lang="scss" scoped>
nav {
    height: 48px;
}

main {
    height: calc(100vh - 48px);
    display: flex;
}
</style>
