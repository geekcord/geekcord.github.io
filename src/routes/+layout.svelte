
<script lang="ts">
	import ChannelsList from '$lib/ChannelsList.svelte';
    import Servers from '$lib/Servers.svelte';
</script>

<div class="flex flex-row h-screen w-full">
    <Servers/>
    <ChannelsList/>
</div>

    
    <style>
        @import '/app.css';
    </style>
