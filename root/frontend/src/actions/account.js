export const login = (dashboard) =>{
    const url = "/api/account"
    const request = new Request(url, {
        method: "GET",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })
    fetch(request).then(res => {
        return res.json()
    }).then(json => dashboard.setState({accounts: json.values})).catch(error => {
        console.log(error)
    })
}


export const accountSignup = (email, firstname, lastname, password) =>{
    const url = "/api/account"
    const request = new Request(url, {
        method: "POST",
        body: JSON.stringify({"email": email, "firstname": firstname, "lastname": lastname, "password": password}),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })
    fetch(request).then(res => {

        return res.json()
    }).catch(error => {
        console.log(error)
    })
}


export const getEntries = (dashboard) => {
    const url = "/api/journal"
    const request = new Request(url, {
        method: "GET",  
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })
    fetch(request).then(res => {
        return res.json()
    }).then(json => {
        dashboard.setState({data: json.values})
    }).catch(error => {
        console.log(error)
    })
}

export const addEntry = (email, title, text) => {
    const url = "/api/journal"
    const request = new Request(url, {
        method: "POST",
        body: JSON.stringify({"email": email, "title": title, "text": text}),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })
    fetch(request).then(res => {
        return res.json()
    }).catch(error => {
        console.log(error)
    })
}

export const deleteEntry = (id) => {

}