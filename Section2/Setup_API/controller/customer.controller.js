const model = require('../model/index')

const postPersonal =async(req, res,next) => {
    const newPersonal = new model.modelPersonal.Personal({
      name:req.body.name,
      address:req.body.address,
      email:req.body.email,
      gender:req.body.gender
    })
    const insertPersonal = await newPersonal.save()

    return res.status(201).send(insertPersonal)
}
const postCart =async(req, res,next) => {
    const newCart = new model.modelCart.Cart({
      
    })
    const insertCart = await newCart.save()

    return res.status(201).send(insertCart)
}
const postTransaction =async(req, res,next) => {
    const newTransaction = new model.modelTransaction.Transaction({
      
    })
    const insertTransaction = await newTransaction.save()

    return res.status(201).send(insertTransaction)
}
const postBilling =async(req, res,next) => {
    const newBilling = new model.modelBilling.Billing({
      
    })
    const insertBilling = await newBilling.save()

    return res.status(201).send(insertBilling)
}

module.exports={
    postPersonal,
    postCart,
    postTransaction,
    postBilling
}