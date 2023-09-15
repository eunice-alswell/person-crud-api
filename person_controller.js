
const Person = require("./person_schema");

const assignCustomId = async () => {
    // Check if there are already 20 records, you can adjust the condition based on your actual logic
    const count = await Person.countDocuments();
    if (count >= 20) {
        console.log('Cannot assign more than 20 custom IDs.');
        return null;
    }

    // Find the highest assigned custom ID
    const highestCustomId = await Person.findOne({}, { _id: 1 }, { sort: { _id: -1 } });

    // If no record exists yet, start from 1, else increment the highest assigned ID
    const nextCustomId = highestCustomId ? highestCustomId._id + 1 : 1;

    return nextCustomId;
};

const personCtrl = {}

// post Requst logic
personCtrl.createPerson = async (req,res) =>{
    try {
        const {name}=  req.body;

        const customId = await assignCustomId();

        if (customId) {
            const person = new Person({
                _id: customId,
                name,
            });
        
            await person.save();
            res.status(201).json(person);
        }else {
            res.status(400).json({ error: 'Cannot assign more than 20 custom IDs.' });
        }
    }catch (err) {
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