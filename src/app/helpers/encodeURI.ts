export const encodeURL = (value: string) => {
    let url: string = value.replace(' ', '-');
    url = url.toLowerCase();
    return url;
};
