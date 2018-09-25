<template>
    <button :class="`btn btn-${level}`" @click="onDelete">{{ level === 'success' ? '+' : '-' }}</button>
</template>

<script>
    export default {
        props: ['level', 'onDelete'],
        methods: {
            onDelete() {
                this.$emit('onDelete')
            }
        }
    }
</script>