import axios from 'axios';

const url ='https://covid19.mathdro.id/api';

export const fetchData = async () => {

    try {
        const {data, recovered, deaths, lastUpdate} = await axios.get(url);
        // const modifiedData = {
        //         confirmed: confirmed,
        //         recovered: recovered,
        //         deaths: deaths,
        //         lastUpdate: lastUpdate
        // }
        //console.log(response);
        
        return {confirmed, recovered, deaths, lastUpdate};

    } catch (error){



    }
}