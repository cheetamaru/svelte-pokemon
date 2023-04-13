<script lang="ts">
    import LoadingDots from "../components/LoadingDots.svelte";
    import { MainPageDomain } from "../domains/MainPageDomain";

    const { mainTitle } = MainPageDomain;
</script>

<div class="page-loading">
    <div class="page-loading__title">{mainTitle}</div>
    <LoadingDots />
</div>

<style>
    .page-loading {
        display: flex;
        height: 100vh;
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
        row-gap: 30px;
    }
</style>