const model = require('../model/index')

const readAgency =async(req, res,next) => {
    const allAgency = await model.modelAgency.Agency.find()
    return res.json(allAgency)
}

const createAgency =async(req, res,next) => {
    const newAgency = new model.modelAgency.Agency({
      name:req.body.name,
      Personal_Information: [],
      Product:[],
      transaction:[],
      billing:[],
    })
    const insertAgency = await newAgency.save()
    
    return res.status(201).send(insertAgency)
  }

  const updateAgency =async(req, res,next) => {
    var object= model.modelAgency.Agency.findOne({name: req.body.name},async function(error, user) {
      if (error || !user) {
        res.send({ error: error });          
      } else {
        if(req.body.personal_information!=[] || req.body.personal_information!=null)
        {
          let list =[]
            req.body.personal_information.forEach(async element => {
            const newPersonal_information =new model.modelPersonal.Personal 
            ({
                ...element
            })
            list.push(newPersonal_information)
            await newPersonal_information.save()
            });
          user.personal_information = list
        }
        if(req.body.product!=[] || req.body.product!=null)
        {
          let list =[]
            req.body.product.forEach(async element => {
            const newProduct =new model.modelProduct.Product 
            ({
                ...element
            })
            list.push(newProduct)
            await newProduct.save()
            });
          user.product = list
        }
        if(req.body.transaction!=[] || req.body.transaction!=null)
        {
          let list =[]
            req.body.transaction.forEach(async element => {
            const newTransaction =new model.modelTransaction.Transaction 
            ({
                ...element
            })
            list.push(newTransaction)
            await newTransaction.save()
            });
          user.transaction = list
        }
        if(req.body.billing!=[] || req.body.billing!=null)
        {
          let list =[]
            req.body.billing.forEach(async element => {
            const newBilling =new model.modelBilling.Billing 
            ({
                ...element
            })
            list.push(newBilling)
            await newBilling.save()
            });
          user.billing = list
        }
        user.save()
        return res.status(201).send(user)
      }
    })
  }

  const deleteAgency =async(req, res,next) => {
    const { id } = req.params;
    const deleteagency = await model.modelAgency.Agency.findOneAndDelete({_id: id})
  return res.status(201).send(deleteagency)
  }

  module.exports={
    readAgency,
    createAgency,
    updateAgency,
    deleteAgency
  }

