<script lang="ts" src="./searchBar.ts"></script>

<template>
    <div class="search-container">
        <input 
        class="form-control"
        type="text"
        placeholder="Buscar lugares..."
        v-model="searchTerm"
        />
        

        <searchResults/>

    </div>    
</template>

<style scoped>
.search-container{
    position: fixed;
    top: 4px;
    left: 10px;
    background-color: white;
    z-index: 999;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    width: 250px;
    border-radius: 5px !important;
    overflow: hidden;
    padding: 5px;
}

</style>