<template>
    <div>
        <h1 class="text-center">Rejestracja zwierząt</h1> <br><br>
        <table class="table" style="width:30%; margin-left:auto; margin-right:auto">
            <tbody>
                <tr>
                    <td>

                        <form @submit.prevent="createAnimal" data-cy="createForm">


                            <div class="form-group row" style="text-align: left">

                                <label for="name" class="col-sm-4 col-form-label">Imię</label>
                                <div class="col-sm-8">
                                    <input type="text" id="name" v-model="state.name" class="form-control">
                                    <span v-if="v$.name.$error" style="color:red">
                                        To pole jest wymagane
                                    </span>
                                </div>
                            </div>

                            <div class="form-group row" style="text-align: left">
                                <label for="category" class="col-sm-4 col-form-label">Gatunek</label>
                                <div class="col-sm-8">
                                    <select class="form-select" id="category" v-model="state.category" data-cy="createAnimalCheckCategory">

                                        <option value="Pies">Pies</option>
                                        <option value="Kot">Kot</option>

                                    </select>
                                    <span v-if="v$.category.$error" style="color:red">
                                        To pole jest wymagane
                                    </span>
                                </div>
                            </div>

                            <div class="form-group row" style="text-align: left">
                                <label for="sex" class="col-sm-4 col-form-label">Płeć</label>
                                <div class="col-sm-8">
                                    <select class="form-select" id="sex" v-model="state.sex" data-cy="createAnimalCheckSex">

                                        <option value="Samiec">Samiec</option>
                                        <option value="Samica">Samica</option>
                                    </select>
                                    <span v-if="v$.sex.$error" style="color:red">
                                        To pole jest wymagane
                                    </span>
                                </div>
                            </div>

                            <div class="form-group row" style="text-align: left">
                                <label for="color" class="col-sm-4 col-form-label">Maść</label>
                                <div class="col-sm-8">
                                    <input type="text" id="color" v-model="state.color" class="form-control">
                                    <span v-if="v$.color.$error" style="color:red">
                                        To pole jest wymagane
                                    </span>
                                </div>
                            </div>

                            <div class="form-group row" style="text-align: left">
                                <label for="age" class="col-sm-4 col-form-label">Wiek</label>
                                <div class="col-sm-8">
                                    <input type="number" min="0" max="20" id="age" v-model="state.age"
                                        class="form-control">
                                    <span v-if="v$.age.$error" style="color:red">
                                        To pole jest wymagane
                                    </span>
                                </div>
                            </div>

                            <div class="form-group row" style="text-align: left">
                                <label for="size" class="col-sm-4 col-form-label">Rozmiar</label>
                                <div class="col-sm-8">
                                    <select class="form-select" id="size" v-model="state.size" data-cy="createAnimalCheckSize">

                                        <option value="Duży">Duży</option>
                                        <option value="Normalny">Normalny</option>
                                        <option value="Mały">Mały</option>

                                    </select>
                                    <span v-if="v$.size.$error" style="color:red">
                                        To pole jest wymagane
                                    </span>

                                </div>
                            </div>


                            <button class="btn btn-primary" @click="submitForm" data-cy="createButton">Dodaj pozycję do listy</button>
                        </form>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import useValidate from '@vuelidate/core'
import { required, maxLength, minLength, maxValue } from '@vuelidate/validators'
import AnimalService from '@/services/AnimalService';
import { reactive, computed } from '@vue/reactivity';

export default {
    name: 'CreateAnimal',


    setup() {
        const state = reactive({
            id: '',
            name: '',
            category: '',
            sex: '',
            age: '',
            color: '',
            size: '',
        })



        const rules = computed(() => {
            return {
                name: { required },
                category: { required },
                sex: { required },
                age: { required, minLength: minLength(1), maxLength: maxLength(2), maxValue: maxValue(20) },
                color: { required },
                size: { required },
            }

        })

        const v$ = useValidate(rules, state)

        return {
            state,
            v$,
        }

    },

    methods: {

        submitForm() {
            this.v$.$validate()
            if (!this.v$.$error) {
                alert('Pomyślnie dodano!')
            } else {
                alert('Błąd walidacji danych')
            }

        },

        createAnimal() {
            AnimalService.createAnimal(this.state)
                .then((response) => console.log(response))
                .catch((error) => console.log(error))

        },

    }
}
</script>

<style scoped>

</style>
