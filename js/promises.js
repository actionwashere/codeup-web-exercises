(async () => {

    async function getEvents(username) {
        try {
            let response = await fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${keys.gitHub}`}});
            // console.log(response);
            let data = await response.json();
            // console.log(data);
            return data;
        } catch(error) {
            console.log(error);
        }
    }

    const getLastCommit = async (username) => {
        try {
         let events = await getEvents(`${username}`);
         let lastCommit = events[0].created_at;
         let date = new Date(`${lastCommit}`);
         return `${username}'s last commit was on: ${date.toLocaleDateString()} @ ${(lastCommit).slice(11)}`;
        } catch(error) {
            console.log(error)
        }
    }






    let lastCommit = await getLastCommit(`jonaGonzo`);
    console.log(lastCommit);

    // let events = await getEvents(`aharownjackson`);
    // console.log(events);



})();