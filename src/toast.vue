<template>
    <div class="toast">
        <slot></slot>
        <div class="line"></div>
        <span class="close" v-if="closeButton" @click="onclickClose">
            {{closeButton.text}}
        </span>
    </div>
</template>

<script>
	export default {
		name: "toast",
		props: {
			autoClose: {
				type: Boolean,
				default: true
			},
			autoCloseDelay: {
				type: Number,
				default: 3
			},
			closeButton: {
				type: Object,
				default() {
					return {
						text: '关闭',
						callback: undefined
					}
				}
			}
		},
		mounted() {
			if (this.autoClose) {
				setTimeout(() => {
					this.close();
				}, this.autoCloseDelay * 1000)
			}
		},
		methods: {
			close() {
				this.$el.remove();
				this.$destroy();
			},
			onclickClose() {
				this.close();
				if (this.closeButton && typeof this.closeButton.callback === 'function') {
					this.closeButton.callback();
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $toast-height: 40px;
    $toast-bg: rgba(0, 0, 0, .75);
    .toast {
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        font-size: $font-size;
        line-height: 1.8em;
        height: $toast-height;
        display: flex;
        align-items: center;
        background-color: $toast-bg;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, .5);
        border-radius: 4px;
        color: #fff;
        padding: 0 16px;

        & .line {
            height: 100%;
            border-left: 1px solid #666;
            margin: 0 10px;
        }
    }
</style>
