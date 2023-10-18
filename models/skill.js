const skills = [
  {
    id: 0,
    name: "Rueben",
    skill: "React, Javascript, AWS Cloud",
    image:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 1,
    name: "Dodge",
    skill: "Django, Python, Docker",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    name: "Ruby",
    skill: "Ruby on Rails, Javascript, AWS Cloud",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    name: "Cod-E",
    skill: "React, Redux, Next.js",
    image:
      "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
];



const getAll = () =>{
    return skills;
}

const getOne = (id) =>{
    id = parseInt(id)
    return skills.find((skill)=> skill.id === id)
}




module.exports = {
    getAll,
    getOne
}