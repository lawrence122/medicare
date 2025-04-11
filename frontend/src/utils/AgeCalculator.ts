export const calculateAge = (date: Date | null) => {
    if (date) {
        const today = new Date();
        const yearDiff = today.getFullYear() - date.getFullYear();
        const monthDiff = today.getMonth() - date.getMonth();
        const dayDiff = today.getDate() - date.getDate();

        return monthDiff < 0 || (monthDiff === 0 && dayDiff < 0) ? yearDiff - 1 : yearDiff;
    }
}