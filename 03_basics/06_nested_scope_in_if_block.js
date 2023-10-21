//nested if scope

if (true) {
  
  const username = "Somesh"

  if(username == "Somesh"){

    const website = "youtube"

    console.log(`my name is ${username} and webiste is ${website}`); //my name is Somesh and webiste is youtube
  }

}

//what if we want to access the webiste variable outside of its current scope
if (true) {
  
  const username = "Somesh"

  if(username == "Somesh"){

    const website = "youtube"

    console.log(`my name is ${username} and webiste is ${website}`); //my name is Somesh and webiste is youtube
  }

  // ************************IMP can't access website here**********************************
  // console.log(website); //ReferenceError: website is not defined

  console.log(username); //somesh
}

//But what if i want to use username here -> Gives the same error

// console.log(username); //ReferenceError: username is not defined

