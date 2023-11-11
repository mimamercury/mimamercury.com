<script>
import "../app.css";

import { onMount } from "svelte";
import { beforeNavigate, afterNavigate, disableScrollHandling } from "$app/navigation";
import { AppRailTile, autoModeWatcher } from '@skeletonlabs/skeleton';
import { AppShell, AppRail, AppRailAnchor } from '@skeletonlabs/skeleton';
import { LightSwitch } from '@skeletonlabs/skeleton';

import HeaderMenu from '$lib/components/HeaderMenu.svelte';
import Newsletter from '$lib/components/Newsletter.svelte';
import JoinNewsClub from "$lib/components/JoinNewsClub.svelte";

let previous_route
afterNavigate((params) => {
  if (!previous_route) {
    previous_route = params.to?.route.id;
    return
  }

  const isPreviousPage = !previous_route && previous_route === params.to?.route.id;

  if (isPreviousPage) {
    previous_route = params.from?.route.id;
    return
  }

  const isPopState = params.type === 'popstate';

  if (isPopState) {
    previous_route = params.from?.route.id;
    return
  }

  if (!isPreviousPage && !isPopState) {
    const elemPage = document.querySelector('#page')
    if (elemPage !== null) {
      elemPage.scrollTo({ top: 0 })
    }
  }

  previous_route = params.from?.route.id;
})
</script>

<!-- <svelte:head>{@html `<script>${autoModeWatcher.toString()} autoModeWatcher();</script>`}</svelte:head> -->

<AppShell slotPageHeader="px-4 py-8 mb-8" slotSidebarRight="" slotPageFooter="p-8" scrollbarGutter="stable">
  <svelte:fragment slot="pageHeader">
      <div class="mx-auto max-w-screen-sm">
        <img src="/images/mima_mercury_logomark.png" width="30px" class="mx-auto mb-[4px]" alt="Logo" />
        <h1 class="text-sm text-center">
            <a href="/" class="serif">
                  The Mima Mercury
              </a>
          </h1>
          <!-- <hr class="border-primary-500 mx-auto mt-[4px] w-[60px]" /> -->
      </div>
  </svelte:fragment>

  <svelte:fragment slot="sidebarRight">
    <AppRail class="w-60 hidden md:grid" aspectRatio="aspect-[6/1]" regionTrail="self-end">
      <svelte:fragment slot="lead">
        <p class="block mb-[30px]"></p>
        <AppRailAnchor href="/" class="">
          <p class="text-left pl-6 text-base font-medium">Home</p>
        </AppRailAnchor>
        <AppRailAnchor href="/elections/thurston/2023/" name="Elections" value={0} title="Elections" class="text-left">
          <p class="text-left pl-6 text-base font-medium">Elections</p>
        </AppRailAnchor>
        <AppRailAnchor href="/about/membership/newsletter/" name="Newsletter" value={1} title="Newsletter">
          <p class="text-left pl-6 text-base font-medium">Newsletter</p>
        </AppRailAnchor>
        <AppRailAnchor href="/about" name="About" value={1} title="About">
          <p class="text-left pl-6 text-base font-medium">About</p>
        </AppRailAnchor>
          <div class="pl-6 text-left">
            <div class="font-sans text-xs mt-4 mb-1">Set color theme</div>
            <LightSwitch />
          </div>
        <!-- <AppRailAnchor href="/news-club" name="News Club" value={1} title="News Club">
          <p class="text-left pl-6 text-base font-medium">News Club</p>
        </AppRailAnchor> -->
      </svelte:fragment>

      <svelte:fragment slot="trail">
        <AppRailAnchor href="/about" name="tile-1" value={0} title="tile-1" class="mt-8">
          <div class="p-6 text-left">
            <h3 class="h4 serif">This is new!</h3>
            <p class="font-normal"><span class="italic">The Mima Mercury</span> is just getting started. Learn how you can help improve local news.</p>
          </div>
        </AppRailAnchor>
      </svelte:fragment>
    </AppRail>
  </svelte:fragment>

  <div class="mx-auto max-w-screen-sm overflow-y-scroll prose-headings:mb-2 prose-p:text-lg prose-p:leading-8">
    <div class="p-4">
      <slot />
    </div>
  </div>

  <svelte:fragment slot="pageFooter">
      <div class="mx-auto max-w-screen-sm">

      </div>
  </svelte:fragment>
</AppShell>
