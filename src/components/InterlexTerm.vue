<template>
    <li class="list-group-item">
        <!--<a @click="setTerm()">-->
        <input type="checkbox" class="checkbox">
        <span class="align-middle">
            <strong>{{ term['_source'].label }} </strong>
            <br>
            Description: {{ term['_source'].definition }}
<!--        <br>-->
<!--        Url: {{ term['_source'].ontologies[0].url}}-->
        </span>
        <!--</a>-->
    </li>
</template>

<script>
    export default {
        name: "InterlexTerm",
        props: {
            term: Object
        },
        methods: {
            onTermSelect() {
                this.$emit('termSelect', this.term);
                // if (this.$route.query.q) {
                //     this.$router.push(`/interlex/search?q=${this.$route.query.q}`);
                // } else {
                //     this.$router.push(`/interlex/search?q=${this.term['_source']['label']}`);
                // }
            }
        }
    }
</script>

<style scoped>
    li {
        display: flex;
        /*cursor: pointer;*/
    }

    li:hover {
        background-color: #eee;
    }
    .checkbox{
        margin: 10px!important;
        width: auto!important;
    }

</style>
