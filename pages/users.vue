<script setup lang="ts">
definePageMeta({
    layout: false,
})
</script>

<template>
    <NuxtLayout>
        <div class="index.vue">
            Dit is de parent (users) pagina<br><br>
            <div style="border: 1px solid red; height: 400px; width: 400px;">
                <NuxtPage />
            </div>
        </div>
    </NuxtLayout>
</template>
