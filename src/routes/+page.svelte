<script lang="ts">
  import { onMount } from 'svelte'
  import { fly } from 'svelte/transition'
  import { page } from '$app/stores'
  import { browser } from '$app/environment'
  import Head from '$lib/components/head.svelte'
  import Footer from '$lib/components/footer.svelte'
  import Post from '$lib/components/post_card.svelte'
  import Profile from '$lib/components/index_profile.svelte'

  let loaded: boolean

  onMount(() => {
    if (browser) {
      loaded = true
    }
  })
</script>

<Head />

<div class="flex flex-col flex-nowrap justify-center xl:flex-row xl:flex-wrap h-feed">
  <div
    in:fly={{ x: 25, duration: 300, delay: 500 }}
    out:fly={{ x: 25, duration: 300 }}
    class="flex-1 w-full max-w-screen-md order-first mx-auto xl:mr-0 xl:ml-8 xl:max-w-md">
    <Profile />
  </div>
  <div
    in:fly={{ x: -25, duration: 300, delay: 500 }}
    out:fly={{ x: -25, duration: 300 }}
    class="flex-1 w-full max-w-screen-md xl:order-last mx-auto xl:ml-0 xl:mr-8 xl:max-w-md">
    <div
      class="flex xl:flex-wrap gap-2 overflow-x-auto xl:overflow-x-hidden overflow-y-hidden max-h-24 my-auto xl:max-h-fit max-w-fit xl:max-w-full pl-8 md:px-0 xl:pl-8 xl:pt-8">
      <button class="btn btn-sm btn-ghost normal-case border-dotted border-base-content/20 border-2 mt-4 mb-8 xl:m-0" />
    </div>
  </div>
  <div class="flex-none w-full max-w-screen-md mx-auto xl:mx-0">
    <main
      class="flex flex-col relative bg-base-100 md:bg-transparent md:gap-8 z-10 text-center"
      itemprop="mainEntityOfPage"
      itemscope>
      <div
        class:hidden={!loaded}
        class="bg-base-300 text-base-content shadow-inner p-8 md:rounded-box"
        in:fly={{ x: -25, duration: 300, delay: 500 }}
        out:fly={{ x: -25, duration: 300 }}>
        <h1>Welcome!</h1>
      </div>
    </main>
    <div
      class:hidden={!loaded}
      class="sticky bottom-0 md:static md:mt-8"
      in:fly={{ x: -25, duration: 300, delay: 500 }}
      out:fly={{ x: -25, duration: 300 }}>
      <div class="divider mt-0 mb-8 hidden lg:flex" />
      <Footer />
    </div>
  </div>
</div>

<style>
  h1 {
    font-size: 2rem;
  }

  p {
    margin: 2rem 0;
  }
</style>
