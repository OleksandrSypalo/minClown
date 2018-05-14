<template>
    <b-card no-body header="Minerals List:">
        <b-list-group v-if="showLoading" flush>
            <b-list-group-item>
                {{loading}}
            </b-list-group-item>
        </b-list-group>
        <b-list-group v-if="showError" flush>
            <b-list-group-item>
                {{error || errorDefault}}
            </b-list-group-item>
        </b-list-group>
        <b-list-group v-if="showList" flush>
            <b-list-group-item v-for="(item, index) in list"
                               :key="index"
                               :to="{name: 'mineral', params: {name: item}}"
                               v-b-modal.mineral_info>{{item}}
            </b-list-group-item>
        </b-list-group>
    </b-card>
</template>

<script>
const arrayRoutesForIdentifications = ['/', '/step'];
const apiUrl = 'http://127.0.0.1:8081'; // todo

export default {
    data() {
        return {
            list: [],
            loading: 'Loading...',
            error: '',
            errorDefault: 'Error...',
            showLoading: true,
            showError: false,
            showList: false
        };
    },
    created () {
        console.log(12);
        this.fetchData()
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        showContent (content) {
            this.showLoading = (content === 'loading');
            this.showError = (content === 'error');
            this.showList = (content === 'list');
        },
        fetchData () {
            if (arrayRoutesForIdentifications.indexOf(this.$route.path) > -1) {
                this.showContent('loading');
                this.axios.get(apiUrl, this.$route.query).then((response) => {
                    console.log(response.data);

//                    setTimeout(()=> {
//                        this.list = [];
//                        this.showContent('error');
//                        this.error = 'Data Not Found';
//                    }, 3000);

                    setTimeout(()=> {
                        this.showContent('list');
                        this.list = [
                            'Almandine',
                            'Iron ore',
                            'Afganite',
                            'Columbite',
                            'Magnetite',
                            'Actinolite',
                            'Almandine',
                            'Iron ore',
                            'Afganite',
                            'Columbite',
                            'Magnetite',
                            'Actinolite',
                            'Almandine',
                            'Iron ore',
                            'Afganite',
                            'Columbite',
                            'Magnetite',
                            'Actinolite',
                            'Almandine',
                            'Iron ore',
                            'Afganite',
                            'Columbite',
                            'Magnetite',
                            'Actinolite',
                            'Almandine',
                            'Iron ore',
                            'Afganite',
                            'Columbite',
                            'Magnetite',
                            'Actinolite',
                        ];
                    }, 1000);
                });
            }
        }
    }
};
</script>

<style>
</style>
