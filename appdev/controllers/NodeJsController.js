const info = require('../models/UserInformation')

const okay = {
    index:(req, res) => {
       res.render('index');

    },
    information:(req, res)=>{
        info.getAllInformation((err, results)=>{
           if (err) throw err;
           res.render('list', {information: results});
        
        })
    },
    save: (req, res) => {
        const data = req.body;
        info.save(data, (err)=>{
            if(err) throw err;
            res.redirect('/');
       })

    }

};
module.exports = okay;