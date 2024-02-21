const tripModel = require('../models/trip.model')

async function tripAdditionController(req, res){
    console.log(req.body)
    try{
        let tripDetail = travelmemory
        .tripdetails({
            tripName: req.body.tripName,
            startDateOfJourney: req.body.startDateOfJourney,
            endDateOfJourney: req.body.endDateOfJourney,
            nameOfHotels: req.body.nameOfHotels,
            placesVisited: req.body.placesVisited,
            totalCost: req.body.totalCost,
            tripType: req.body.tripType,
            experience: req.body.experience,
            image: req.body.image,
            shortDescription: req.body.shortDescription,
            featured: req.body.featured
        })
        await tripDetail.save()
        res.send('Trip added Successfully')
    }catch(error){
        console.log('ERROR')
        res.send('SOMETHING WENT WRONG')
    }
}

async function getTripDetailsController(req,res){
    try{
        travelmemory
.tripdetails.find({})
        .then(doc => res.send(doc))
        .catch(err => res.send('SOMETHING WENT WRONG WHILE FETCHING'))
    }catch(error){
        console.log('ERROR')
        res.send('SOMETHING WENT WRONG')
    }
}

async function getTripDetailsByIdController(req,res){
    try{
        travelmemory
.tripdetails.findById(req.params.id)
        .then(doc => res.send(doc))
        .catch(err => res.send('Nothing in database'))
    }catch(error){
        console.log('ERROR')
        res.send('SOMETHING WENT WRONG')
    }
}
module.exports = { tripAdditionController, getTripDetailsController, getTripDetailsByIdController }