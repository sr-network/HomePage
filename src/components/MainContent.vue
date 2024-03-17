<template>
    <blockquote class="main-content">
        <slot />
    </blockquote>
</template>

<style>
.main-content {
    border-left: 4px solid var(--bulma-info);
    padding: 16px;
    font-size: 1.1em;
}
</style>