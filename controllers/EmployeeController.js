class EmployeeController{
    static home = async(req,res) => {
        try{
            res.render('home')
        }catch(err){
            console.log(err)
        }
    }
    static about = async(req,res) => {
        res.send('about');
    }
    static ourteam = async(req,res) => {
        res.send('ourteam');
    }
    static contactus = async(req,res) => {
        res.send('cotactus');
    }
    static login = async(req,res) => {
        res.send('login');
    }
}
module.exports = EmployeeController