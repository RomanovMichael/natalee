<template>
    <div>
      	<PopupsPolicy v-if="this.$store.state.popup === 'policy'" />
      	<PopupsCallback v-if="this.$store.state.popup === 'callback'" />
      	<PopupsSuccess v-if="this.$store.state.popup === 'success'" />
      	<PopupsError v-if="this.$store.state.popup === 'error'" />
		<PopupsSubscribe v-if="this.$store.state.popup === 'subscribe'" />
    </div>
</template>
<script>
    export default {}
</script>
