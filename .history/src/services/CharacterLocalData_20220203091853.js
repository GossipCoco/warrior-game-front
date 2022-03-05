import { reactive } from "vue"

const CharacterLocalData = reactive({
    character: {
        Id: 'etoileDeFeu',
        CurrentName: 'Etoile de Feu',
        Genre: 'Mâle',
        KittyName: 'Rusty',
        ApprenticeName: 'Nuage de Feu',
        WarriorName: 'Coeur de Feu',
        OlderName: '',
        LeaderName: 'Etoile de Feu',
        Age: '96',
        Description: '',
        Personnality: '',
        Biography: '',
        ImageChar: 'etoiledefeu.png'
    },
    isSuccess: false
})

export default CharacterLocalData