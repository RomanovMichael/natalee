<template>
	<div class="contacts-map">
		<div class="contacts-map___inner">
			<iframe class="contacts-map__iframe lazy" data-src="/map.html"></iframe>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			isShowContacts: {
				type: Boolean,
				default: true
			}
		},
		data: function () {
			return {
			}
		},
		mounted: function() {
			this.$lozad.observe();
		}
	}
</script>

<style src="~/components/contacts/__map.css" lang="css"></style>

