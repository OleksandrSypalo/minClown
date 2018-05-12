<template>
    <div class="content-sticky">
        <b-card header="Next Step:" :title="title" class="content-step">
            <p v-if="showError" class="card-text">
                {{error || errorDefault}}
            </p>
            <p v-if="showLoading" class="card-text">
                {{loading}}
            </p>
            <p v-if="showMain" class="card-text">
                {{quest}}
            </p>
            <b-button v-if="showMain" v-for="(btn, index) in buttons"
                      :key="index"
                      :to="{name: 'step', query: btn.query}"
                      variant="primary"
            >{{btn.answer}}
            </b-button>
        </b-card>
    </div>
</template>

<script>
const arrayRoutesForIdentifications = ['/', '/step'];
const apiUrl = 'http://127.0.0.1:8081'; // todo

export default {
    data() {
        return {
            title: '',
            quest: '',
            buttons: [],

            loading: 'Loading...',
            error: '',
            errorDefault: 'Error...',
            showMain: false,
            showError: false,
            showLoading: true,
        };
    },
    created () {
        this.fetchData()
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        showContent (content) {
            this.showLoading = (content === 'loading');
            this.showError = (content === 'error');
            this.showMain = (content === 'main');
        },
        createQuery(query){
            return Object.assign({}, this.$route.query, query)
        },
        fetchData () {
            this.showContent('loading');

            if (arrayRoutesForIdentifications.indexOf(this.$route.path) > -1) {
                this.axios.get(apiUrl, this.$route.query).then((response) => {
                    console.log(response.data);

                    setTimeout(()=> {
                        this.showContent('main');
                        this.title = 'fdsfd';
                        this.quest = 'fdserg g er geg eg fd?';
                        this.buttons = [
                            {
                                answer: 'Yes',
                                query: this.createQuery({a: 1, b: 2})
                            },
                            {
                                answer: 'No',
                                query: this.createQuery({a: 4, b: 5, c: 8})
                            }
                        ]
                    }, 1000);
                });
            }
        }
    }
};
</script>

<style>
.content-sticky {
    position: sticky;
    top: 60px;
    max-height: calc(100vh - 64px);
    overflow-y: auto;
}

.content-step .btn {
    margin-right: 10px;
}
</style>
