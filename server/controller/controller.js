var userDb = require("../model/model")

exports.create =(req, res) =>{// the create method from curd... its more of post
    if(!req.body){
         res.status(500).send({message:'field cannot be empty'
    })
    return;
    }
    else{
        const user = newUserBD({
            name: req.body.name,
            team: require.body.team,
            stack: require.body.stack,
            gender: require.body.gender
        })
    }
   user
   .save(user)
   .then(data =>{
    res.status(200).send(data);
   })
  .catch(error => {
    res.status(400).send({message:`${error}`})
   })
   }

   exports.find = (req, res) => { 
	userDB.find()
	.then(user =>{
	  res.status(200).send(user)	
	})
	.catch(error => {
	res.status(400).send(err)
		
	})

    

}
exports.update =(req , res)=> {
	const id = req.params.id
	userDB.findByIdAndUpdate(id, req.body, {ufindAndModify:false})
	.then(data =>{
		if(!data){
			res.status(404).send({message: 'no user id' })	
		}
		else{
		    res.send(data)
	 }
			
	})
	.catch(err => {
	      res.status(500).send({message:'nothing to do'})	
	})
}



