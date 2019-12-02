<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>

<script>
	export default {
		name: "toast"
	}
</script>

<style lang="scss" scoped>
    $font-size:14px;
    $toast-height:40px;
    $toast-bg:rgba(0,0,0,.75);
    .toast {
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        font-size: $font-size;
        line-height: 1.8em;
        height:  $toast-height;
        display: flex;
        align-items: center;
        background-color: $toast-bg;
        box-shadow: 0 0 3px 0 rgba(0,0,0,.5);
        border-radius: 4px;
        color:#fff;
        padding: 0 16px;
    }
</style>
