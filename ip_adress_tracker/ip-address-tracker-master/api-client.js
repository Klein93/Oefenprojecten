
const findIPLocation = async function (IPadress) {


    let api_key = ""
    let url = `https://geo.ipify.org/api/v1?apiKey=${api_key}&ipAddress=${IPadress}`;

    try {
        let data = await fetch(url, { method: "GET" })
        return data.json();

    } catch (error) {
        console.log(error)
    }
};
