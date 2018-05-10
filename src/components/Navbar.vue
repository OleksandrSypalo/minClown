<template>
    <div class="navbar-shadow">
        <b-navbar toggleable="md" fixed="top" type="dark" variant="primary">
            <b-container>
                <b-navbar-brand to="/">Home</b-navbar-brand>
                <b-navbar-nav>
                    <b-nav-item to="/add-mineral" left>Create Mineral</b-nav-item>
                    <b-nav-item to="/add-task" left>Create Task</b-nav-item>
                </b-navbar-nav>
            </b-container>
        </b-navbar>
    </div>
</template>

<script>

</script>

<style>
.navbar-shadow {
    position: relative;
    height: 56px;
}
</style>
