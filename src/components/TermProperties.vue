<template>
    <div>
        <div class="panel panel-default">
            <div class="panel-body scroll">
                <vue-form-generator :key="selectedTerm" :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
                <b-button @click="onSave">Save</b-button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .scroll {
        /*margin:4px;*/
        /*padding:4px;*/
        height: 880px;
        overflow-y: auto;
    }


    h1 {
        text-align: center;
        font-size: 36px;
        margin-top: 20px;
        margin-bottom: 10px;
        font-weight: 500;
    }

    fieldset {
        border: 0;
    }

    .panel {
        margin-bottom: 20px;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 4px;
        -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
        box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
        /*border-color: #ddd;*/
    }

    .panel-body {
        padding: 15px;
        overflow-y: scroll;
    }



    .field-checklist .wrapper {
        width: 100%;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

    /*.field-checklist-wrapper {*/
    /*    width: 100%;*/
    /*}*/
    .group-one-class {
        background-color: red;
        width: 100%;
    }
    .checklist-class {
        width: 100%;
    }

</style>

<script>
    import VueFormGenerator from 'vue-form-generator';
    import 'vue-form-generator/dist/vfg.css';
    import _ from 'lodash';
    export default {
        name: "TermProperties",
        props: {
            selectedTerm: String,
            init: Object,
            searchResults: Array
        },
        components: {
            "vue-form-generator": VueFormGenerator.component
        },

        data() {
            return {
                model: {
                    label: '',
                    sourceVariable: this.selectedTerm,
                    description: '',
                    url: '',
                    valueType: '',
                    isAbout: [],
                    datumType: '',
                    unitCode: '',
                    maxValue: '' ,
                    minValue: '',
                    allowableValues: [],
                    choices: [],
                    derivative: '',
                    citation: '',
                    measureOf: '',
                    provenance: ''
                },
                schema: {
                    groups: [
                        {
                            styleClasses: "group-one-class",
                            fields: [
                                {
                                type: "input",
                                inputType: "text",
                                label: "Label",
                                model: "label",
                                hint: "Label for the term",
                                readonly: false,
                                featured: true,
                                disabled: false,
                                validator: VueFormGenerator.validators.string
                            }, {
                                type: "input",
                                inputType: "text",
                                label: "Source variable",
                                model: "sourceVariable",
                                readonly: true,
                                hint: "Variable name from dataset",
                                featured: true,
                                required: false,
                                disabled: true
                            }, {
                                type: "input",
                                inputType: "text",
                                label: "Description",
                                model: "description",
                                featured: true,
                                required: false,
                                hint: "An explanation of the nature, scope, or meaning of the new term.",
                                validator: VueFormGenerator.validators.string
                            }, {
                                type: "select",
                                inputType: "text",
                                label: "valueType",
                                model: "valueType",
                                hint: "A value representation such as integer, float, string, date/time",
                                featured: true,
                                readonly: false,
                                required: true,
                                multiSelect: false,
                                noneSelectedText: 'Select one',
                                values: ['string', 'boolean', 'integer', 'float', 'double', 'duration', 'datetime', 'time', 'date', 'anyURI', 'complexType']
                            }, {
                                type: "input",
                                inputType: 'text',
                                label: "datumType",
                                model: "datumType",
                                hint: "What type of datum it is (e.g. range,count,scalar etc.): see IAO definitions",
                                readonly: false,
                                featured: true,
                                disabled: false,
                                validator: VueFormGenerator.validators.string
                            }, {
                                type: "input",
                                inputType: 'text',
                                label: "Unit",
                                model: "hasUnit",
                                hint: "Unit of measurement following BIDS specification",
                                readonly: false,
                                featured: true,
                                disabled: false,
                                validator: VueFormGenerator.validators.string
                            }, {
                                type: "input",
                                inputType: "number",
                                label: "Min Value",
                                model: "minimumValue",
                                readonly: false,
                                featured: true,
                                disabled: false,
                                validator: VueFormGenerator.validators.number
                            }, {
                                type: "input",
                                inputType: 'number',
                                label: "Max Value",
                                model: "maximumValue",
                                readonly: false,
                                featured: true,
                                disabled: false,
                                validator: VueFormGenerator.validators.number
                            }, {
                                type: "checklist",
                                label: "isAbout",
                                model: "isAbout",
                                required: false,
                                multiSelect: true,
                                featured: true,
                                styleClasses: 'checklist-class',
                                values: [],
                                hint: "An explanation of the nature, scope, or meaning of the new term.",
                                help: "Check right column for definition of the related concept terms",
                                validator: VueFormGenerator.validators.array,
                            },
                            {
                                type: "array",
                                label: "Choices",
                                model: "choices",
                                featured: true,
                                showRemoveButton: true,
                                placeholder: "Name",
                                // newElementButtonLabelClasses: "btn btn-solid",
                                // newElementButtonLabel: "Add new Option",
                                validator: VueFormGenerator.validators.array,
                            }]
                        }
                        // {
                        //     styleClasses: "choices-group",
                        //     fields: [
                        //         {
                        //             type: "array",
                        //             label: "Choices",
                        //             model: "choices",
                        //             featured: true,
                        //             showRemoveButton: true,
                        //             // newElementButtonLabelClasses: "btn btn-solid",
                        //             // newElementButtonLabel: "Add new Option",
                        //             validator: VueFormGenerator.validators.array,
                        //         },
                        //         {
                        //             type: "input",
                        //             inputType: "text",
                        //             label: "Name",
                        //             model: "name",
                        //             hint: "Label for the term",
                        //             readonly: false,
                        //             featured: true,
                        //             disabled: false,
                        //             validator: VueFormGenerator.validators.string
                        //         },
                        //         {
                        //             type: "input",
                        //             inputType: "text",
                        //             label: "Value",
                        //             model: "value",
                        //             hint: "Value for the choice",
                        //             readonly: false,
                        //             featured: true,
                        //             disabled: false,
                        //             validator: VueFormGenerator.validators.string
                        //         }
                        //     ]
                        // }
                    ]
                },
                interlexTerms: [],
                formOptions: {
                    validateAfterLoad: true,
                    validateAfterChanged: true,
                    validateAsync: true
                }
            };
        },
        watch: {
            searchResults: {
                deep: true,
                immediate: true,
                handler(newVal) {
                    const searchLabels = _.map(newVal, s => {
                        return s['_source']['label'];
                    });
                searchLabels.unshift('No concept needed');
                this.schema.groups[0].fields[8].values = searchLabels;
                }
            },
        },
        methods: {
            onSave() {
                this.$emit('saveResponse', this.selectedTerm, this.model);
            },
        },
        mounted() {
            if (this.init) {
                this.model = this.init;
            }
        },
    };
</script>
