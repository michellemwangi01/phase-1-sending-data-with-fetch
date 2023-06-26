// Add your code here
function submitData(usrName, usrEmail){
    return fetch('http://localhost:3000/users', {
        method:'POST',
        headers: {
            'content-type':'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify({
            name: usrName,
            email: usrEmail
        })
        
    })
    .then((res)=>res.json())
    .then((user)=> {
        const userID = document.createElement('p').textContent = `UserID: ${user.id}`
        document.body.append(userID)
    })
    .catch((error)=>{
       const errorMessage = document.createElement('p').textContent = `Error Message: ${error.message}`
        document.body.append(errorMessage)
    })


}

submitData("Amirah", "Mich@somemail.com")


  