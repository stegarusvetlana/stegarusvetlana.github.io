document.addEventListener("DOMContentLoaded", onHtmlLoaded);

function onHtmlLoaded(){
    console.log("DOM fully loaded and parsed");
       
    var users = [{
        name: {
            firstName: 'Ana',
            lastName: 'Pop'
        },
        age: 25,
        cnp: '12345',
        address: {
            street: 'Muzicii',
            number: 123
        },
        parents: [{
            name: 'Clementina Pop',
            age: 50
        },
        {
            name: 'George Pop',
            age: 50
        }
        ]
    },
    {
        name: {
            firstName: 'Cristina',
            lastName: 'Dumitru'
        },
        age: 15,
        cnp: '12345',
        address: {
            street: 'Donath',
            number: 123
        },
        parents: [{
            name: 'Ana Dumitru',
            age: 40
        }
        ]
    }];
    
    //identific containerul pentru carduri
    var container = document.getElementById('cards');
    
    for (var i = 0; i < users.length; i++){
        
        //generam cardul
        var card = document.createElement('div');
        card.className = "card";
        
        card.innerHTML += '<span>' + 'Name: ' + users[i].name.firstName + ' ' + users[i].name.lastName + '</span></br>';
        card.innerHTML += '<span>' + 'Age: ' + users[i].age + '</span></br>';
        card.innerHTML += '<span>' + 'Cnp: ' + users[i].cnp + '</span></br>';
        card.innerHTML += '<span>' + 'Address: ' + users[i].address.street + ' ' + users[i].address.number + '</span></br>';
        card.innerHTML += '<span>Parents: </span></br>';
        
        for (var y = 0; y < users[i].parents.length; y++){
            card.innerHTML += '<span class="parent">' + users[i].parents[y].name + ' Age: ' + users[i].parents[y].age + '</span></br>';
        }
        
        
         container.appendChild(card);

    }
    // execut functia remove
    deleteFirstCard();  
  
         
}
// remove first element
 function deleteFirstCard() {
        var card = document.getElementById("first-element");
        card.remove();
    }  
    




