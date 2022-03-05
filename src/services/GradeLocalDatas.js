import { reactive } from "vue"

const GradeLocalDatas = reactive({
    Grades:  {
        chef: {
            value: 'Chef',
            text: 'Chef'
        },
        deputy: {
            value: 'Lieutenant',            
            text: 'Lieutenant'
        },
        warrior: {
            value: 'Guerrier',            
            text: 'Guerrier'
        },
        apprentice: {
            value: 'Apprenti',            
            text: 'Apprenti'
        },
        kit: {
            value: 'Chaton',            
            text: 'Chaton'
        },
        queen: {
            value: 'Reine',            
            text: 'Reine'
        },
        older: {
            value: 'Ancien',            
            text: 'Ancien'
        },
        medecine: {
            value: 'Guérisseur',            
            text: 'Guérisseur'
        },
        loner: {
            value: 'Solitaire',
            text: 'Solitaire'
        },
        kittyPet: {
            value: 'Chat domestique',
            text: 'Chat domestique'
        }
    }
})

export default GradeLocalDatas