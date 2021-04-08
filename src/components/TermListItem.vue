<template>
    <li class="list-group-item" @click="onTermSelect"
        >
        <!--<a @click="setTerm()">-->
        <span class="align-middle">
            {{ term }}
        </span>

        <div v-if="completed[term]" class="checkmark"></div>
        <!--</a>-->
    </li>
</template>

<script>
    export default {
        name: "TermListItem",
        props: {
            term: String,
            completed: Object,
        },
        data() {
            return {
                showCheck: false,
                activeIndex: null
            }
        },
        methods: {
            onTermSelect() {
                this.$emit('termSelect', this.term);

            },
        },
    }
</script>

<style scoped>
    .checkmark {
        display: inline-block;
        transform: rotate(45deg);
        height: 25px;
        width: 12px;
        margin: auto;
        margin-right: inherit;
        border-bottom: 4px solid #78b13f;
        border-right: 4px solid #78b13f;
    }

    li {
        display: flex;
        cursor: pointer;
    }



</style>
