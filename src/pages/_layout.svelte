<script>
  import { url, isActive, layout } from "@roxi/routify"
</script>

<div class="flex flex-col">
  <header class="mt-8">
    <nav class="flex justify-between items-center mx-8">
      <h1 class="text-black font-black text-xl tracking-wide">
        <a href="/">P5js with svelte</a>
      </h1>
      <ul class="flex space-x-2 justify-between items-center">
        {#each $layout.children as {path, title}}
          <li>
            <a href={$url(path)} class:active={$isActive(path)}>{title}</a>
          </li>
        {/each}
      </ul>
    </nav>
  </header>
  <main class="container flex-1">
    <div class="flex flex-col items-center justify-between space-y-12 p-4 mx-auto">
      <slot />
    </div>
  </main>
</div>

<style>
  .active { text-decoration-line: underline; }
</style>
