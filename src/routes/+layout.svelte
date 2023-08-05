<script lang="ts">

	import ChannelsList from '$lib/ChannelsList.svelte';
	import Messages from '$lib/Messages.svelte';
	import Servers from '$lib/Servers.svelte';
	import { onMount } from 'svelte';
	
</script>

<!-- svelte-ignore a11y-interactive-supports-focus -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <span 
        on:click={() => document.querySelectorAll(".hide-in-menu").forEach(el => el.classList.toggle("hidden"))}
        class="text-white inline top-3 md:hidden absolute right-5" role="button">
            <svg xmlns="http://www.w3.org/2000/svg" class="inline icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 6l16 0"></path>
                <path d="M4 12l16 0"></path>
                <path d="M4 18l16 0"></path>
             </svg>
        </span>

<div class="flex flex-row h-screen w-full">
	<Servers />
    <ChannelsList />
    <Messages />
</div>

<style>
	@import '/app.css';
</style>
