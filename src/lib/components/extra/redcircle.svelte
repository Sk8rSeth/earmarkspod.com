<script lang="ts">
    export let id: string
    const src = `https://redcircle.com/embedded-player/sh/bf11c8f9-3c8e-4125-9a8a-6b36e97c1379/ep/${id}`
  </script>
  
  <iframe
  {src}
  class="redcircle-player"
  title="RedCircle Episode Player"
  frameborder="0"
  loading="lazy"
  scrolling="no"
  height="170"
  width="750"
  style="border: none; max-width: 700px;"
  allowfullscreen />

<!-- 
<script>
    import RedCircle from '$lib/components/extra/redcircle.svelte'
</script>

<RedCircle id='589bafd5-c0a7-49e6-b331-71ecf56cca32' /> -->