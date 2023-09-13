const Person = require("./person_schema");

const personCtrl = {}

// post Requst logic
personCtrl.createPerson = async (req,res) =>{
    try {
        let person = new Person(req.body);
        let result = await person.save();
        res.status(201).json(person);
    } catch (err) {
        res.status(400).json({error:err.message})
        console.error(err);
    }
};

// Get Requst logic
personCtrl.getPerson = async (req,res) =>{
    try {
        const  person = await Person.findById({_id:req.params.user_id});
        if (!person){
            return res.status(404).json({error:"Person not found or doesn't exist"});
        }
        res.status(200).json(person);
    } catch (err) {
        res.status(400).json({error:err.message})
        console.error(err);
    }
};

// update Request logic
personCtrl.updatePerson = async (req,res) =>{
    try {
        const {name,age} = req.body;
        const updatedPerson = await Person.findByIdAndUpdate(
           {_id: req.params.user_id},
            {name,age},
            {new:true}
        );
        if (!updatedPerson) {
            return res.status(404).json({ error: 'Person not found'});
          }
        res.json(updatedPerson);
    } catch (err) {
        res.status(400).json({error:err.message})
        console.error(err);
    }
};

// delete Request logic
personCtrl.deletePerson = async (req,res) =>{
    try {
        const deletedPerson = await Person.findByIdAndDelete(
            {_id:req.params.user_id}
        );
        if (!deletedPerson){
            res.status(404).json({error: "Person not found"});
        }
        res.status(200).json(deletedPerson)
    } catch (err) {
        res.status(400).json({error:err.message})
        console.error(err)
    }
}


module.exports = personCtrl