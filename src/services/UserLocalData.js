import { reactive } from "vue";

const UserLocalData = reactive({
    user: {
        UserID: 1,
        LastName: 'Coralie',
        FirstName: 'Coco',
        Username: 'GossipCoco',
        Login: 'gossipcoco',
        Password: '123',
        Email: 'coralie.honorin@masterk.com'
    },
    isSuccess: false
})

export default UserLocalData