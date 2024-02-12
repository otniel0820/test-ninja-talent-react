const url = 'https://randomuser.me/api?results=100&noinfo'
export const getUsers = async () => {
    try {
        const response = await fetch(url, { cache: "no-cache" });
        const data = await response.json();
        return data
    } catch (error) {
        console.error(error);
    }
};