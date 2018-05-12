<template>
    <div class="navbar-shadow">
        <b-navbar toggleable="md" fixed="top" type="dark" variant="dark">
            <b-container>
                <b-navbar-brand to="/">Home</b-navbar-brand>
                <b-navbar-nav>
                    <b-nav-item to="/add-mineral" left>Add Mineral</b-nav-item>
                    <b-nav-item to="/add-task" left>Add Task</b-nav-item>
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
    height: 60px;
}

</style>
