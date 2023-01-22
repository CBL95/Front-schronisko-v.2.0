<template>
    <div class="container">
        <h1 class="text-center">Rejestr zwierząt</h1> <br><br>
        <table class="table table-striped">
            <thead>
                <th>Identyfikator</th>
                <th>Imię</th>
                <th>Kategoria</th>
                <th>Płeć</th>
                <th>Wiek</th>
                <th>Kolor</th>
                <th>Rozmiar</th>
                <th>Usuwanie</th>
            </thead>
            <tbody>
                <tr v-for="animal in animals" v-bind:key="animal.id">
                    <td> {{ animal.id }} </td>
                    <td> {{ animal.name }} </td>
                    <td> {{ animal.category }}</td>
                    <td> {{ animal.sex }} </td>
                    <td> {{ animal.age }} </td>
                    <td> {{ animal.color }} </td>
                    <td> {{ animal.size }} </td>
                    <td><button v-on:click="deleteAnimal(animal.id)">Usuń</button></td>
                </tr>
            </tbody>
        </table>

    </div>

</template>

<script>
/* eslint-disable */
/*jshint esversion: 6 */
import AnimalService from '@/services/AnimalService';


export default {
    name: 'Animals',
    data() {
        return {
            animals: []
        };

    },
    methods: {
        getAnimals() {
            AnimalService.getAnimals().then((response) => {
                this.animals = response.data;
            })
        },
        deleteAnimal(id) {
            AnimalService.deleteAnimal(id).then(() => {
                this.getAnimals();
            })
        },


    },
    created() {
        this.getAnimals();
    }
};
</script>

