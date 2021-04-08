<template>
    <div>
        <ul class="list-group">
            <!-- key property is used whenever list is updated -->
<!--            <TermListItem-->
<!--                    v-for="term in terms1"-->
<!--                    :term="term"-->
<!--                    :key="term"-->
<!--                    :completed="completed"-->
<!--                    @termSelect="onTermSelect"-->
<!--            >-->
<!--            </TermListItem>-->

            <li class="list-group-item" v-for="(term , idx) in terms1" :key="idx+term"
                :class="{'current-item': idx === activeIndex}" @click="onTermSelect(term, idx)">

                    <span>
                     {{term}}
                   </span>

                <div v-if="completed[term]" class="checkmark"></div>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from "axios";
    const API_KEY = 'CfufpoSNVXujv7h14HFHI4dL9p36mxCJ';

    export default {
        name: "SourceVariableList",
        props: {
            terms1: Array,
            completed: Object,
        },
        data() {
          return {
              results: [],
              itemCompleted: false,
              activeIndex: null
          }
        },
        methods: {
            onTermSelect(term, index) {
                // eslint-disable-next-line
                console.log(47, term, index);
                this.activeIndex = index;
                this.$emit('termSelect', term);

                // axios.get(`https://scicrunch.org/api/1/term/elastic/search?term=${term}`, {
                //     params: {
                //         key: API_KEY,
                //     }
                // }).then(response => {
                //     // eslint-disable-next-line
                //     console.log(56, response.data.data.hits.hits);
                //     this.results = response.data.data.hits.hits;
                // });

                // const query = {
                //     query: {
                //         bool: {
                //             must : [
                //                 {  term : { type : "cde" } },
                //                 { term : { "ancestors.ilx" : "ilx_0115066" } },
                //                 { multi_match : {
                //                         query: term,
                //                         fields: [ "label" , "definition" ]
                //                     }
                //                 }
                //             ]
                //         }
                //     }
                // };
                axios.get(`https://scicrunch.org/api/1/elastic/interlex/term/_search?q=${term}`, {
                    params: {
                        key: API_KEY
                        // source: JSON.stringify(query),
                        // source_content_type: 'application/json'
                    }
                }).then(response => {
                    // eslint-disable-next-line
                    // console.log(56, term, response.data.hits.hits);
                    this.$emit('termSearchResult', response.data.hits.hits);
                });
            },
        },
    };
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

    .current-item {
        background-color: lightgrey;
    }
</style>
