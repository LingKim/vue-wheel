<template>
    <div class="wrapper">
        <input type="text">
    </div>
</template>

<script>
	export default {
		name: "gu-input"
	}
</script>

<style lang="scss" scoped>
    $height: 32px;
    $border-color: #999;
    .wrapper {
        > input {
            height: 32px;
        }
    }
</style>
