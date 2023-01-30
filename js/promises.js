(async () => {

    async function getEvents(username) {
        try {
            let response = await fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${keys.gitHub}`}});
            // console.log(response);
            let data = await response.json();
            console.log(data);
            return data;
        } catch(error) {
            console.log(error);
        }
    }

    const getLastCommit = async (username) => {
        try {
         let events = await getEvents(`${username}`);
         let lastCommit = events.find(event => event.type === `PushEvent`);
         return lastCommit;
        } catch(error) {
            console.log(error)
        }
    }






    let lastCommit = await getLastCommit(`aharownjackson`);
    console.log(lastCommit);

    let events = await getEvents(`aharownjackson`);
    console.log(events);



})();