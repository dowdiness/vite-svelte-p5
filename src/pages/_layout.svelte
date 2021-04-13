<script>
  import { url, isActive, layout } from "@roxi/routify"
  let open = false
  function handleHamburger(_event) {
    open = !open
  }
  const mql = window.matchMedia('(min-width: 1024px)')
  const handleMediaQuery = function(mql) {
  if (mql.matches) {
      open = true
    } else {
      open = false
    }
  };
  mql.addListener(handleMediaQuery)
  handleMediaQuery(mql)
</script>

<div class="flex flex-col items-center">
  <header class="flex flex-wrap py-2 w-full">
    <div class="w-full px-4">
      <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 rounded">
        <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
            <a class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black" href="/">
              P5js with svelte
            </a>
            <!-- Hamburger menu -->
            <button class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" on:click={handleHamburger}>
              <span class="block relative w-6 h-px rounded-sm bg-black"></span>
              <span class="block relative w-6 h-px rounded-sm bg-black mt-1"></span>
              <span class="block relative w-6 h-px rounded-sm bg-black mt-1"></span>
            </button>
          </div>
          {#if open}
            <div class="flex lg:flex-grow items-center" id="example-navbar-info">
              <ul class="flex flex-col lg:flex-row list-none ml-auto">
                {#each $layout.children as {path, title}}
                  <li class="nav-item" class:active={$isActive(path)}>
                    <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" href={$url(path)}>
                      {title}
                    </a>
                  </li>
                {/each}
              </ul>
            </div>
          {/if}
        </div>
      </nav>
    </div>
  </header>
  <main class="container flex-1">
    <div class="flex flex-col items-center justify-between space-y-12 p-4 mx-auto overflow-hidden">
      <slot />
    </div>
  </main>
</div>

<style>
  .active { text-decoration-line: underline; }
</style>
