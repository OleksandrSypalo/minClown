<template>
    <div id="app">
        <component-navbar></component-navbar>
        <b-container>
            <div class="row">
                <div class="col-sm-9">
                    <router-view></router-view>
                </div>
                <div class="col-sm-3">
                    {{list}}
                </div>
            </div>
        </b-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: 'list'
        };
    }
};
</script>

<style>
</style>
