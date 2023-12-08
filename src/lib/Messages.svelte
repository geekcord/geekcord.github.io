<script lang="ts">
    let messages = [
        {
            username: 'Geek',
            message: 'Hey, cool server! can I invite my friend?',
            invite: false
        },

        {
            username: 'Admin',
            message: 'Sure! use this invitation below:',
            invite: true
        }
    ]

    function addMessage(message: string) {
        // we dont need this :P
        return 0
    }
</script>


<div class="h-full bg-[#313338] flex-1 hidden lg:block xl:block hide-in-menu md:min-h-[100vh] flex-col">
    <div>
        <div class="shadow-lg p-4 mb-11">
            <h1 class="text-[#f0f1f3] font-semibold">
                💬・general
            </h1>
        </div>
    </div>

    <div class="flex-1 overflow-y-auto">
            <div class="ml-3 mt-10 space-y-5 overflow-y-auto">
                {#each messages as message}
                    
                <div class="flex flex-row overflow-y-auto hover:bg-[#303237]">
                    <div>
                        <img src="/img/user_{message.username.toLowerCase()}.png" 
                        class="rounded-full"
                        alt="geek" height="50" width="50">
                    </div>
        
                    <div>
                        <h1 class="text-md ml-3 
                        {message.invite ? 'text-green-300' : 'text-white'} font-medium">{message.username}</h1>
                        <h1 class="text-md ml-3 text-white">{message.message}</h1>
        
                        {#if message.invite}
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <!-- svelte-ignore a11y-no-static-element-interactions -->
                            <div class="cursor-pointer" on:click={() => window.open("https://discord.gg/gUVVTVhWem")}>
                                <h1 class="text-md ml-3 text-[#049EEA] hover:underline">https://discord.gg/gUVVTVhWem</h1>
                                <div class="bg-[#2B2D31] ml-3 w-fit h-auto rounded-md p-2">
                                    <div class="mx-3">
                                        <h1 class="font-bold text-[#B5BAC1]" style="font-size: 0.8em;">YOU'VE BEEN INVITED TO JOIN A SERVER</h1>
        
                                        <div class="flex flex-row my-3">
                                            <div>
                                                <img src="/img/icon.webp" alt="icon" width="65" height="65" class="rounded-lg">
                                            </div>
        
                                            <div>
                                                <h1 class="text-lg ml-3 font-bold text-white">GeekCord  😎💻</h1>
                                            </div>
                                            <div class="mt-2">
                                                <button class=" bg-green-600 hover:bg-green-700 text-white p-2 ml-3 rounded-sm px-6 font-semibold">
                                                    Join
                                                </button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        {/if}
                    </div>
            </div>
                {/each}

        </div>
    </div>

    <div class="m-3 mb-5">
        <form class="w-full" on:submit={() => addMessage(document.getElementById('inp')?.value.trim())}>
            <input class="rounded-md w-full text-white p-3 bg-[#383A40] ring-0 border-0" 
            placeholder="Message #💬・general. (Enter to send)"
            autocomplete="off" type="text" name="text" id="inp" />
        </form>
    </div>
</div>
