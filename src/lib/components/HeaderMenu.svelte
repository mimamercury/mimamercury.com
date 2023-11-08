<script>
    import { page } from '$app/stores';
    import { TabGroup, TabAnchor } from "@skeletonlabs/skeleton";
</script>

<TabGroup 
	justify="justify-center"
	active="variant-filled-primary"
	hover="hover:variant-soft-primary"
	flex="flex-1 lg:flex-none"
	rounded=""
	border=""
	class="bg-surface-100-800-token w-full"
>
	<TabAnchor href="/elections" selected={$page.url.pathname === '/'}>
		<span>Elections</span>
	</TabAnchor>

    <TabAnchor href="/about" selected={$page.url.pathname === '/'}>
		<span>About</span>
	</TabAnchor>
</TabGroup>
