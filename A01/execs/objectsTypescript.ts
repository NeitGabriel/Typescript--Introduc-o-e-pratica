const people= {
    name : 'Mario' ,
    age: 29,
    profission: 'Developer'
}



enum profission{
    'Developer',
    Teacher,
    Atlet
}

interface people0{
    name : String ,
    age: Number,
    profission?: profission

}

const vanessa: people0 ={
    name: 'Vanessa',
    age: 18,
    profission: profission.Developer
}

interface studant extends people0{
    material: string[]
}

const jessica: studant = {
    name: 'Jessica',
    age: 17,
    profission: profission.Atlet,
    material: ['Nutrition', 'Racer', 'Calistenics']
}

function lista(list: string[]){
    for(const item of list){
        console.log('-' + item);
    }
}

lista(jessica.material);