<script>
  export let label = true
</script>

<form
  action="https://buttondown.email/api/emails/embed-subscribe/mimamercury"
  method="post"
  target="popupwindow"
  onsubmit="window.open('https://buttondown.email/mimamercury', 'popupwindow')"
  class="embeddable-buttondown-form"
>
  {#if label}
  <label for="bd-email" class="text-sm text-left">Enter your email</label>
  {/if}
  <input type="email" name="email" id="bd-email" class="mt-1 border-2 border-white" placeholder="Your email address" />
  
  <input type="submit" value="Subscribe" class="ml-2 font-sans font-bold border-0 hover:cursor-pointer px-3 py-2 bg-secondary-400" />
</form>
