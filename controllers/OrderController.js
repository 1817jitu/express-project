class OrederController{
    static display = async (req,res) =>{
        try{
            res.render('orders/display')
        }catch(err){
            console.log(err)
        }
    }
    static createOrder = async (req,res) =>{
        try{
            res.render('orders/create')
        }catch(err){
            console.log(err)
        }
    }
}

module.exports = OrederController