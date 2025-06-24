<script setup lang="ts">
</script>

<template>
	<div>
		<Nav />

		<main>
			<section id="map">
				<Map />
			</section>

			<section id="region-details">
				<RegionDetails />
			</section>
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

    #map {
        width: 50%;
        height: 100%;
    }

    #region-details {
        width: 50%;
        height: 100%;
        overflow-y: auto;
    }
}
</style>
