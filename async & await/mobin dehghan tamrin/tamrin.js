async function fetchuserdata() {try
    {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        const names = users.map(user => user.name);
        return(names);}
        catch(error){console.log("error",error);
        }
        }
        console.log("hello");
        fetchuserdata().then(names => console.log(names));