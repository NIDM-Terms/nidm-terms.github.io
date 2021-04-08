<template>
    <div>
        <input @input="onInput"/>
    </div>
</template>

<script>
    export default {
        name: "SearchBar",
        methods: {
            onInput: function (event) {
                // eslint-disable-next-line
                // console.log(event.target.value);
                this.$emit('termChange', event.target.value);

            }
        }
    }
</script>

<style scoped>
    input {
        width: 75%;
    }

    div {
        text-align: center;
        margin: 20px;
    }
</style>
