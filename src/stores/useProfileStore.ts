import { defineStore } from 'pinia';

// 定义一个新的 store
export const useProfileStore = defineStore({
    id: 'user',
    state: () => ({
        imageUrl: 'https://library.gxres.net/images/icons/avatar.webp',
        name: 'Restent Ou',
        akaName: 'SliverRiver',
        id: 'gxres042',
        isContentChanged: false
    }),
    actions: {
        toggleContent() {
            if (this.isContentChanged) {
                this.imageUrl = 'https://library.gxres.net/images/icons/avatar.webp';
                this.name = 'Restent Ou';
                this.akaName = 'SliverRiver';
                this.id = 'gxres042';
            } else {
                this.imageUrl = 'https://library.gxres.net/images/icons/SliverRiver.webp';
                this.name = 'SliverRiver';
                this.akaName = 'Restent Ou';
                this.id = 'slivermoe';
            }

            this.isContentChanged = !this.isContentChanged;
        }
    }
});