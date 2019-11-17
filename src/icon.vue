<template>
    <svg class="g-icon">
        <use :xlink:href=`#i-${name}`></use>
    </svg>
</template>

<script>
	export default {
		name: "icon",
        props:['name']
	}
</script>

<style lang="scss" scoped>
    .g-icon {
        width: 1.5em;
        height: 1.5em;
    }
</style>
