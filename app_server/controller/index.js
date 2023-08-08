const indexPage = (req,res)=>{
    res.render('index',{title:'website'})
}

module.exports = {indexPage}