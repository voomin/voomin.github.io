<template>
    <div>
        <header>
            <router-link to="/">/</router-link>
            <router-link to="/three/">three</router-link>
            <router-link to="/three/line">line</router-link>
            <!-- <router-link to="/three/text">text</router-link> -->
        </header>
        

        <slot/>
        <NuxtLayout />
    </div>
</template>


<style scoped>
    header {
        display: grid;
        grid-auto-flow: column;
        gap: 2rem;
        width: fit-content;
        padding: 1rem;
    }
</style>