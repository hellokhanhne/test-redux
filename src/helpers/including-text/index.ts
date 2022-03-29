export const isIncludingText = (name : string, filter : string) => {
    return name.toLowerCase().includes(filter.toLowerCase());
};