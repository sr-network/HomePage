import { defineStore } from 'pinia';

export const useProfileStore = defineStore({
    id: 'user',
    state: () => ({
        avatar: 'https://library.gxres.net/images/icons/avatar.webp',
        isContentChanged: true,
        isTextVisible: false,
    }),
    actions: {
        toggleContent() {
            this.isContentChanged = !this.isContentChanged;
            this.isTextVisible = !this.isTextVisible;

            if (this.isContentChanged) {
                this.avatar = 'https://library.gxres.net/images/icons/avatar.webp';
            } else {
                this.avatar = 'https://library.gxres.net/images/icons/SliverRiver.webp';
            }
        }
    }
});
