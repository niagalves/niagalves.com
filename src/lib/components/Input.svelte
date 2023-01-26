<script lang="ts">
	export let id: string = '';
	export let value: string = '';
	export let label: string = '';
	export let required: boolean = false;
	export let placeholder: string = '';
</script>

<div class="w-full">
	<label for={id} class="block mb-1 text-sm font-semibold text-white">{label}</label>
	<input
		type="text"
		{id}
		bind:value
		{required}
		{placeholder}
		class="bg-white border text-zinc-900 outline-none text-base rounded-md focus:ring-cyan-400 focus:border-cyan-400 w-full p-1"
	/>
</div>
