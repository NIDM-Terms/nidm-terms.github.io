<template>
    <div v-if="results">
        {{ results }}
        <div class="details">
            <ul class="list-group"
                v-for="res in results"
                :term="res"
                :key="res['_source']['ilx']"
            >
                {{ res['_source']['label'] }}
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TermDetail",
        props: ['results'],
    }
</script>

<style scoped>
 .details {
     margin-top: 10px;
     padding: 10px;
     border: 1px solid #ddd;
     border-radius: 4px;
 }
</style>
