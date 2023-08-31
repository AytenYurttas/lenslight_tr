const getIndexPage= (req,res)=>{
    res.render("index")
}

const getAboutPage= (req,res)=>{
    res.status(200).render("about")
}

export{getIndexPage,getAboutPage};