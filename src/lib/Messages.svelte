<script lang="ts">
	import { afterUpdate, onMount } from "svelte";

    $: inpHeight = 0
    $: bottomPosition = 0
    $: width = 0

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

    function calculateBottom() {
        bottomPosition = window.innerHeight - 275
        inpHeight = document.querySelector('#inp')?.clientHeight
        width = window.innerWidth
    }

    onMount(() => {
        calculateBottom()
        
        window.addEventListener("resize", () => {
            calculateBottom()
        })
    })

</script>


<div class="h-full bg-[#313338] flex-1 hidden lg:block xl:block hide-in-menu md:min-h-[100vh] flex-col">
    <div on:click={() => {
        if (width < 768) document.getElementById("nav-toggle")?.click()
    }}>
        <div class="shadow-lg p-4 mb-11">
            <h1 class="text-[#f0f1f3] font-semibold">
                💬・general
            </h1>
        </div>
    </div>

    <div class="flex-1 overflow-y-auto">
            <div class="ml-3 mt-10 space-y-5 overflow-y-auto" style="height: {bottomPosition}px">
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
                            <div class="cursor-pointer mr-3"  on:click={() => window.open("https://discord.gg/gUVVTVhWem")}>
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
        <form class="w-full"  on:submit={() => addMessage(document.getElementById('inp')?.value.trim())}>
          <div class="join w-full rounded-md ">
            <div class="join-item bg-[#383A40] flex justify-center content-center px-3 flex-wrap h-[{inpHeight}px]">
                <div>

                    <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#B9BBBD" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="transparent" class=""></circle><path fill="var(--interactive-normal)" fill-rule="evenodd" d="M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm0-17a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1Z" clip-rule="evenodd" class="attachButtonPlus_bf89ca"></path></svg>
                </div>
            </div>
            <input class="p-3 text-white  bg-[#383A40] ring-0 border-0 join-item  flex-1 w-[45px]"  
            placeholder="Message #💬・general."
            autocomplete="off" type="text" name="text" id="inp" />

            <div class="join-item bg-[#383A40] flex justify-center content-center px-1 flex-wrap h-[{inpHeight}px]">
                <div>

                    <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#B9BBBD" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M4 6a4 4 0 0 1 4-4h.09c1.8 0 3.39 1.18 3.91 2.9A4.09 4.09 0 0 1 15.91 2H16a4 4 0 0 1 3.46 6H20a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5V10c0-1.1.9-2 2-2h.54A3.98 3.98 0 0 1 4 6Zm12 2a2 2 0 1 0 0-4h-.09c-.96 0-1.8.65-2.02 1.58L13.29 8H16Zm-5.89-2.42.6 2.42H8a2 2 0 1 1 0-4h.09c.96 0 1.8.65 2.02 1.58Z" clip-rule="evenodd" class=""></path><path fill="currentColor" d="M3 20c0 1.1.9 2 2 2h5.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V20ZM13.5 22a.5.5 0 0 1-.5-.5v-7c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5V20a2 2 0 0 1-2 2h-5.5Z" class=""></path></svg>                </div>
            </div>

            <div class="join-item bg-[#383A40] flex justify-center content-center px-2 flex-wrap h-[{inpHeight}px]">
                <div>

                    <svg class="icon__68853" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#B9BBBD" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm2.18 13.87a2.9 2.9 0 0 1-1.66-.49 3.18 3.18 0 0 1-1.12-1.35A4.88 4.88 0 0 1 4 12c0-.75.14-1.42.42-2 .29-.59.7-1.04 1.24-1.37a3.7 3.7 0 0 1 1.95-.5c.64 0 1.21.14 1.72.4.5.28.89.67 1.15 1.16l-1.22.88a1.76 1.76 0 0 0-1.64-1.02c-.66 0-1.17.22-1.52.65a2.74 2.74 0 0 0-.53 1.8c0 .78.18 1.39.53 1.81.35.42.86.64 1.52.64.3 0 .57-.06.81-.16.25-.12.45-.27.58-.47v-.93H7.3v-1.4h3.24v4.23H9.27l-.2-.71c-.43.57-1.06.86-1.89.86Zm6.34-.15h-1.57V8.28h1.57v7.44Zm1.51 0h1.57v-2.83h2.76v-1.42H16.6V9.7H20V8.28h-4.97v7.44Z" clip-rule="evenodd" class=""></path></svg>                </div>
            </div>

            <div class="join-item bg-[#383A40] flex justify-center content-center px-2 flex-wrap h-[{inpHeight}px]">
                <div>

                    <svg class="" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#B9BBBD" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M6 2h12a4 4 0 0 1 4 4v7.5a.5.5 0 0 1-.5.5H19a5 5 0 0 0-5 5v2.5a.5.5 0 0 1-.5.5H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Zm.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM19 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-9.91 2.94a1 1 0 0 0-1.66 1.12 5.5 5.5 0 0 0 9.14 0 1 1 0 0 0-1.66-1.12 3.5 3.5 0 0 1-5.82 0Z" clip-rule="evenodd" class=""></path><path fill="currentColor" d="M21.66 16c.03 0 .05.03.04.06a3 3 0 0 1-.58.82l-4.24 4.24a3 3 0 0 1-.82.58.04.04 0 0 1-.06-.04V19a3 3 0 0 1 3-3h2.66Z" class=""></path></svg>                </div>
            </div>

            <div class="join-item bg-[#383A40] flex justify-center content-center pr-3 pl-2 flex-wrap h-[{inpHeight}px]">
                <div>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  class=" grayscale" viewBox="0 0 36 36"><path fill="#FFCC4D" d="M36 18c0 9.941-8.059 18-18 18c-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18"/><ellipse cx="11.5" cy="16.5" fill="#664500" rx="2.5" ry="3.5"/><ellipse cx="24.5" cy="16.5" fill="#664500" rx="2.5" ry="3.5"/><path fill="#664500" d="M23.485 27.879C23.474 27.835 22.34 23.5 18 23.5s-5.474 4.335-5.484 4.379a.495.495 0 0 0 .231.544a.51.51 0 0 0 .596-.06c.01-.008 1.014-.863 4.657-.863c3.59 0 4.617.83 4.656.863a.5.5 0 0 0 .829-.484z"/><path fill="#5DADEC" d="M10 30c0 2.762-2.238 5-5 5s-5-2.238-5-5s4-10 5-10s5 7.238 5 10z"/><path fill="#BDDDF4" d="M18 11c8.749 0 16.033 4.509 17.656 10.484c.222-1.128.344-2.292.344-3.484c0-9.94-8.059-18-18-18C8.06 0 0 8.06 0 18c0 1.192.123 2.356.344 3.484C1.967 15.509 9.252 11 18 11z"/><path fill="#664500" d="M30 12c-5.554 0-7.802-4.367-7.895-4.553a1 1 0 0 1 1.787-.899C23.967 6.694 25.713 10 30 10a1 1 0 1 1 0 2zM6 12a1 1 0 0 1 0-2c5.083 0 5.996-3.12 6.033-3.253c.145-.528.69-.848 1.219-.709c.53.139.851.673.718 1.205C13.921 7.437 12.704 12 6 12z"/></svg>                </div>
            </div>
          </div>
        </form>
    </div>
</div>
