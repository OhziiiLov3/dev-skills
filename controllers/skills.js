const Skill = require('../models/skill');




const index = (req, res) =>{
    // res.send({skills: Skill.getAll()})
    res.render('skills/index',{
        skills: Skill.getAll()
    })
};


const show = (req, res) => {
    // res.send({skill:Skill.getOne(req.params.id)})
   res.render('skills/show',{
    skill: Skill.getOne(req.params.id)
   })
}

const newSkill = (req,res) =>{
    res.render('skills/new', {title: "New Skill"})
}





module.exports = {
    index,
    show,
    new: newSkill
}