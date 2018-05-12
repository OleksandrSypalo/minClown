<template>
    <div id="app">
        <component-navbar></component-navbar>
        <b-container class="margin-bottom-10px">
            <div class="row">
                <div class="col-sm-9">
                    <router-view></router-view>
                </div>
                <div class="col-sm-3">
                    <component-list></component-list>
                </div>
            </div>
        </b-container>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    }
};
</script>

<style>
body {
    overflow-y: scroll;
}
.margin-bottom-10px {
    margin-bottom: 10px;
}
</style>
