const User = require('../models/User');
const vaccinations = require('../models/vaccinations');

const createvaccinations = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)

        const  vaccinations= await new vaccinations({
            title: req.body.title,
            content: req.body.content,
            userId: user._id
        })
        await vaccinations.save()
        await user.vaccinations.push(vaccinations)
        await user.save()
        res.json({myvaccinations:vaccinations})
    } catch (error) {
        
        res.send(error)
    }
}

const deletevaccinations = async (req,res) => {
    try{
        const vaccinations = await vaccinations.findById(req.params.vaccinationsId)
        await User.findByIdAndUpdate(vaccinations.userId, { $pull: { vaccinations: vaccinations._id } })
        await vaccinations.remove()
        res.send('the blog is deleted')
    }catch(error){
        res.send(error);
    }
}



module.exports = {createvaccinations, deletevaccinations}
