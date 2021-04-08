<template>
    <div id="annotate">
        <div>
            <p class="upload"><b> Upload a CSV or TSV file to annotate:  </b></p>
            <input type="file" @change="onFileSelected">
<!--            <button @click="onFileSelected">Upload</button>-->

        </div>
        <b-container fluid class="col-container" v-if="sourceList.length">
            <div id="sidebar-left">
                <div class="col-header">
                    <p><b>Terms</b></p>
                </div>
                <div>
                    <SourceVariableList :terms1="sourceList" :completed="completed"
                                        v-on:termSearchResult="searchList"
                                        v-on:termSelect="showTermProperties"
                    ></SourceVariableList>
                </div>
            </div>
            <div id="main-content" v-if="selectedTerm">
                <div class="col-header">
                    <p><b>Term Properties</b></p>
                </div>
                <transition name="fade" mode="out-in">
                    <TermProperties :key="selectedTerm" :init="responses[selectedTerm]"
                                    v-if="showForm" :selectedTerm="selectedTerm"
                                    :searchResults="interlexTerms"
                                    v-on:saveResponse="setResponse"></TermProperties>
                </transition>
            </div>
            <div id="sidebar-right" v-if="selectedTerm">
                <div class="col-header">
                    <p><b>Interlex Search</b></p>
                </div>
                <InterlexSearchList :terms="interlexTerms"></InterlexSearchList>
            </div>
        </b-container>
        <div class="download-btn" v-if="isAnnotated">
            <b-button variant="primary" @click="downloadJSONLD">Download JSON</b-button>
        </div>
    </div>
</template>

<script>
    import Papa from 'papaparse';
    import JSZip from 'jszip';
    import _ from 'lodash';
    import { saveAs } from 'file-saver';
    import 'vue-form-generator/dist/vfg.css';
    import SourceVariableList from './SourceVariableList';
    import InterlexSearchList from "./InterlexSearchList";
    import TermProperties from "./TermProperties";
    export default {
        name: 'Annotate',
        components: {
            TermProperties,
            InterlexSearchList,
            SourceVariableList
        },
        data() {
            return {
                fileInput: {},
                terms: [],
                sourceList: [],
                interlexTerms: [],
                selectedTerm: null ,
                selectedFile: null,
                image: { backgroundImage: "static/images/nidm-terms-background.png" },
                showForm: false,
                responses: {},
                completed: {},
                isAnnotated: false
            }
        },
        watch: {
            responses: {
                deep: true,
                handler(newVal) {
                  this.isAnnotated = !_.isEmpty(newVal);
                  // eslint-disable-next-line
                  // console.log(82, 'in resp watcher ', newVal, _.isEmpty(newVal), this.isAnnotated);

                }
            },
            interlexTerms() {
                this.$forceUpdate();
            },
            completed: {
                deep: true,
                handler(newVal) {
                    // eslint-disable-next-line
                    console.log(92, 'in completed watcher ', this.selectedTerm, newVal);
                }
            },
        },
        methods: {
            downloadJSONLD() {
                const annotatedFile = this.createAnnotatedFile(this.responses);
                const jszip = new JSZip();
                // eslint-disable-next-line
                // console.log(117, this.responses);
                jszip.folder('responses').file(`${this.fileInput.name.split('.')[0]}.json`, JSON.stringify(annotatedFile, null, 4));
                jszip.generateAsync({ type: 'blob' })
                    .then((myzipfile) => {
                        const fileName = `study-data`;
                        saveAs(myzipfile, fileName);
                    });
            },
            createAnnotatedFile(responses) {
                // eslint-disable-next-line
                // console.log(117, responses);
                // const r = {
                //     "race": {
                //         "label": "race1",
                //         "sourceVariable": "race",
                //         "description": "something",
                //         "url": "",
                //         "valueType": "",
                //         "isAbout": [],
                //         "isPartOf": [],
                //         "datumType": "",
                //         "unitCode": "",
                //         "maxValue": "",
                //         "minValue": "",
                //         "allowableValues": [],
                //         "choices": [],
                //         "derivative": "",
                //         "citation": "",
                //         "measureOf": "",
                //         "provenance": ""
                //     }
                // };
                let annotatedObject = {};

                for (const [key, value] of Object.entries(responses)) {
                    // eslint-disable-next-line
                    // console.log(`${key}: ${value}`);
                    const annotateKey = `DD(source=${this.fileInput.name}, variable=${key})`;
                    const annotatedValue = {
                        "label": key,
                        "description": value.description,
                        "sameAs": "https://ndar.nih.gov/api/datadictionary/v2/dataelement/src_subject_id",
                        "valueType": value.valueType,
                        "sourceVariable": value.sourceVariable,
                        "isAbout": value.isAbout
                    };
                    annotatedObject[annotateKey] = annotatedValue;
                }
                return annotatedObject;
            },
            onFileSelected(event) {
                this.fileInput = event.target.files[0];
                // eslint-disable-next-line
                // console.log(116, this.fileInput.name.split('.')[0]);
                Papa.parse(this.fileInput, {
                    complete: results => {
                        this.sourceList = results.data[0];
                    },

                });
            },
            searchList(termList) {
                this.interlexTerms = termList;
            },
            showTermProperties(termSelected) {
                this.selectedTerm = termSelected;
                this.showForm = true;
            },
            setResponse(selectedTerm, annotations) {
                // eslint-disable-next-line
                // console.log(104, selectedTerm, annotations, Object.keys(annotations));
                this.$set(this.responses, selectedTerm, annotations);
                // this.responses[selectedTerm] = annotations;
                // todo: check if all properties are set and then set completed to true or false
                if (annotations) { //change the condition
                    this.$set(this.completed, selectedTerm, true);
                    // eslint-disable-next-line
                    // console.log(128, 'in setResponse set cond', this.completed, Object.values(annotations));
                } else this.$set(this.completed, selectedTerm, false);
            }
        },

    }
</script>

<style scoped>
    #annotate {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        /*background-color: rgba(199, 176, 211, 0.71);*/
    }
    .col-container {
        display: flex;
        width: 100%;
        padding-bottom: 20px;
    }

    .col-header {
        /*background-color: #009DAA;*/
        /*height: 60px;*/
        background-color: lightsteelblue;
        /*border-style: solid;*/
        /*border-color: red;*/
        border-bottom: 1px solid grey;
    }
    .col-header > p {
        text-align: center;
        color: #444;
        padding-top: 15px;
    }

    .bv-example-row {
        border: black;
    }
    /*Demo Styles*/

    .upload {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        text-align: left;
        color: #444;
        padding-top: 20px;
        padding-left: 20px;
        /*padding: 150px 0;!*Add some height to the columns*!*/
    }

    input {
        padding-left: 15px;
        padding-bottom: 15px;
        border-radius: 8px;
        width: calc(33.333333% - 20px);
        box-sizing: border-box;
    }

    input:hover {
        cursor: pointer;
    }

    #main-content {
        /*background-color: #eef3f7;*/
        width: 50%;
        float: left;
        border-top: 1px solid grey;
        border-bottom: 1px solid grey;
    }

    #sidebar-left {
        /*background-color: #e3e9ee;*/
        width: 25%;
        float: left;
        border: 1px solid grey;
    }

    #sidebar-right {
        /*background-color: #dbe1e6;*/
        width: 25%;
        float: left;
        border: 1px solid grey;
    }

    /*Base Mobile Layout*/
    .wrap {
        width: 90%;
        margin: 0 auto;
    }

    /*3 Column Layout*/
    /*@media only screen and (min-width: 1024px) {*/
    /*    .wrap {*/
    /*        width: 1024px;*/
    /*        margin: 0 auto;*/
    /*    }*/

    /*    #main-content {*/
    /*        width: 50%;*/
    /*        float: left;*/
    /*    }*/

    /*    #sidebar-left {*/
    /*        width: 25%;*/
    /*        float: left;*/
    /*    }*/

    /*    #sidebar-right {*/
    /*        width: 25%;*/
    /*        float: left;*/
    /*    }*/
    /*}*/

    /*Wide Layout*/
    /*@media only screen and (min-width: 1200px) {*/
    /*    .wrap {*/
    /*        width: 1140px;*/
    /*        margin: 0 auto;*/
    /*    }*/
    /*}*/

    /*Move Sidebar Position*/
    /*@media only screen and (min-width: 1024px) {*/
    /*    .wrap, #main-content, #sidebar-left, #sidebar-right {*/
    /*        position: relative;*/
    /*    }*/

    /*    #main-content, #sidebar-left, #sidebar-right {*/
    /*        top: 0;*/
    /*    }*/

    /*    #sidebar-right {*/
    /*        right: 0;*/
    /*    }*/

    /*    #sidebar-left {*/
    /*        left: -50%; !*Width of #main-content*!*/
    /*    }*/

    /*    #main-content {*/
    /*        left: 25%; !*Width of #left-sidebar*!*/
    /*    }*/
    /*}*/

    /*Optional 2 Column Layout*/
    /*@media only screen and (min-width: 768px) and (max-width: 1024px) {*/
    /*    #sidebar-right {*/
    /*        width: 50%;*/
    /*    }*/
    /*    #sidebar-left {*/
    /*        width: 50%;*/
    /*    }*/
    /*    #main-content {*/
    /*        position: relative;*/
    /*        top: 0;*/
    /*        left: 0;*/
    /*    }*/
    /*}*/

    .community-logo {
        height: 60px;
        margin-right: 10px;
        vertical-align: middle;
    }

    .community-name {
        font-size: 28px;
    }

    .breadcrumbs-v3 {
        padding: 10px 0;
        background: #585f69;
        border-bottom: 1px solid #eee;
    }

    .breadcrumb {
        top: 10px;
        padding-right: 0;
        background: none;
        position: relative;
    }

    .pull-right {
        float: right!important;
    }

    .download-btn {
        padding-top: 10px;
        padding-bottom: 20px;
        padding-left: 15px;
    }

</style>
