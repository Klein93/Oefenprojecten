
const findIPLocation = async function (IPadress) {

    let url = `https://geo.ipify.org/api/v1?apiKey=at_iMkaiv9KzDcr3upnhBYNOQcIcECUA&ipAddress=${IPadress}`;
    try {
        let data = await fetch(url, { method: "GET" })
        return data.json();

    } catch (error) {
        console.log(error)
    }
};