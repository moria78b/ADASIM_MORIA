const User = require('../models/User');
const vaccinations = require('../models/vaccinations');

const createvaccinations = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)//שליפת המשתמש שאליו נרצה לשייך את המאמר
        //אמור להיות בדיקת הימצאות
        //יצירת מאמר חדש עם הפרטים שנשלחו
        const  vaccinations= await new vaccinations({
            title: req.body.title,
            content: req.body.content,
            userId: user._id
        })
        //לא נראה לי שזה טוב
        await vaccinations.save()//שמירת המאמר בקולקשן
        await user.vaccinations.push(vaccinations)//הוספת המאמר למערך של המאמרים של משתמש זה
        await user.save()//הוספה בפועל - שמירה
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