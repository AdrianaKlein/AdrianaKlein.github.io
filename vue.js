const Vocabulary = Vue.createApp ({
    data() {
        return {
            skInput: "",
            enInput: "",
            translationList: [],
            editSkInput: "",
            editEnInput: "",
            editing: false,
            editIndex: null
        }
    },

    methods: {
        saveButton() {
            if (this.skInput && this.enInput) {
                this.translationList.push({
                    skInput: this.skInput,
                    enInput: this.enInput, 
                });

                this.skInput = "";
                this.enInput = "";
            } else {
                alert("Prosím, vyplňte obe polia.");
            }
        },

        editTranslation(index) {
            this.editing = true;
            this.editIndex = index;
            this.editSkInput = this.translationList[index].skInput;
            this.editEnInput = this.translationList[index].enInput;
        },

        saveEditTranslation() {
            this.translationList[this.editIndex].skInput = this.editSkInput;
            this.translationList[this.editIndex].enInput = this.editEnInput;
            this.cancelEdit();
        },

        cancelEdit() {
            this.editing = false;
            this.editIndex = null;
            this.editSkInput = "";
            this.editEnInput = "";
        },

        removeTranslation(index) {
            this.translationList.splice(index, 1);
        },
    },
});

Vocabulary.mount("#app");