<template>
    <div class="row justify-content-between box">
        <div class="col-md-12">
            <form @submit.prevent="handleSubmit">
                <input v-model="text" type="text" class="form-control">
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            Button
        },
        props: ['onSubmit'],
        data() {
            return {
                text: ''
            }
        },
        methods: {
            handleSubmit() {
                if (!this.text) {
                    alert('No todo');
                } else {
                    this.onSubmit(this.text);
                    this.text = '';
                }
            }
        }
    }
</script>

<style lang="scss">
.form-control {
  border: 2px solid #4fb87d !important;
  border-radius: 0 !important;

  :focus {
    border-color: #386f50 !important;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 8px rgba(255, 0, 0, 0.6) !important;
  }
}
</style>

