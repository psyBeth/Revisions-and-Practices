import { show, showError } from "./renderUserAnd Error";


export const getUsers = () => {
    fetch("https://api.github.com/users")
        .then((res) => {
            if (!res.ok) {           
                throw new Error(`Error: ${res.status}`);
            }
            return res.json()
        })
        .then((data) => {
            show(data)
        })
        .catch((err) => showError(err))
    }