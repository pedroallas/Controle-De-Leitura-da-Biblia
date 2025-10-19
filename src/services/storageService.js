export const storageService = {
    saveProgress(progress) {
        localStorage.setItem('readingProgress', JSON.stringify(progress));
    },
    loadProgress() {
        const progress = localStorage.getItem('readingProgress');
        return progress ? JSON.parse(progress) : null;
    }
};
