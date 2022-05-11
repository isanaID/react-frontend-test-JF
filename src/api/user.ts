import axios from "axios";

async function getUser(params: any) {
    return await axios
    .get(`https://randomuser.me/api/`, {params});
    }